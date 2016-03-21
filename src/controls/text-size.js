import applyStyle from '../utils/apply-style';
import getButton from '../utils/get-button';
import showDialog from '../utils/show-dialog';

export default ($, window, document, state, container) => {
    let block = $('<div class="dialog text-height-dialog" />');
    let list = $('<ul/>');
    let sizes = [10, 11, 12, 14, 18, 24];
    sizes.forEach(size => {
        let link = $(`<li><a href="#">${size}</a></li>`);
        link.on('click', () => {
            applyStyle($, {
                selection: state.selection,
                context: state.contenteditable,
                style: `<span style="font-size: ${size}px;" />`,
                comparator: function (node) {
                    return node.style.fontSize === size + 'px'; }
            });
        });
        list.append(link);
    });
    block.append(list);

    let action = () => {
        if (!state.codeMode) {
            showDialog($, document, block); }
    };

    let button = getButton($, { icon: 'icon-text-height', action });

    container.append(button, block);
};
