import applyStyle from '../utils/apply-style';
import getButton from '../utils/get-button';
import showDialog from '../utils/show-dialog';

export default ($, window, document, state, container) => {
    let block = $('<div class="dialog palette-dialog" />');
    let list = $('<ul/>');
    let colors = ['#3399CC', '#E74C3C', '#FFFFFF', '#000000'];
    colors.forEach(color => {
        let link = $(`<li><a href="#"
            style="background-color: ${color}"></a></li>`);
        link.on('click', () => {
            applyStyle($, {
                selection: state.selection,
                context: state.contenteditable,
                style: `<span style="color: ${color};" />`,
                comparator: function (node) {
                    return node.style.color === color; }
            });
        });
        list.append(link);
    });
    block.append(list);

    let action = () => {
        if (!state.codeMode) {
            showDialog($, document, block); }
    };

    let button = getButton($, { icon: 'icon-palette', action });

    container.append(button, block);
};
