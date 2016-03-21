export default ($, options) => {
    let { selection, markup } = options;
    markup = $(markup);
    selection.refresh();

    let range = selection.getRangeAt(0);
    range.deleteContents();
    [].reverse.call(markup)
        .each((id, elem) => range.insertNode(elem));
    range.collapseAfter(markup.last()[0]);
    selection.setSingleRange(range);
};
