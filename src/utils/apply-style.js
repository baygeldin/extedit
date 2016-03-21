export default ($, options) => {
    let { selection, style, context, selector,
        comparator } = options;
    selector = selector || getSelector(style);
    comparator = comparator || (() => true);

    selection.refresh();

    let range = selection.getRangeAt(0);
    if (range.collapsed ||
        range.compareNode(context[0]) !== range.NODE_BEFORE_AND_AFTER) {
        return; }

    let closest = closestSimilar(range.commonAncestorContainer);
    let content;

    if (closest) {
        let clone;
        clone = range.cloneRange();
        clone.collapse(true);
        clone.setStartBefore(closest[0]);
        content = clone.extractContents();
        clone.insertNode(content);
        clone = range.cloneRange();
        clone.collapse();
        clone.setEndAfter(closest[0]);
        content = clone.extractContents();
        clone.insertNode(content);
        range.setStartBefore(closest[0]);
        [].reverse.call(closest.contents())
            .each((id, elem) => range.insertNode(elem));
        closest.remove();
    } else {
        content = range.extractContents();
        pruneSimilar(content.children);
        let wrapped = $(style).append(content)[0];
        range.insertNode(wrapped);
        range.selectNodeContents(wrapped);
    }

    selection.setSingleRange(range);
    removeEmptyTags(context);

    function pruneSimilar(nodes) {
        $(nodes).each((id, node) => {
            let elem = $(node);
            elem.find(selector).addBack(selector)
                .filter((id, elem) => comparator(elem))
                .contents().unwrap();
        });
    }

    function closestSimilar(node) {
        let closest;
        do {
            closest = $(node).closest(selector, context)
            if (closest[0] && comparator(closest[0])) {
                return closest; }
        } while (closest.length)
    }

    function getSelector(pattern) {
        let elem = $(pattern);
        let classes = elem.attr('class');
        let tagName = elem.prop('tagName');
        return classes ? `${tagName}.${classes.replace(/ /g, '.')}` : tagName;
    }

    function removeEmptyTags() {
        let empty = context.find('*:empty').not('br, img, embed');
        empty.each((id, node) => {
            let elem = $(node);
            while (elem.parent().contents().length === 1) {
                elem = elem.parent(); }
            elem.remove();
        });
    }
};
