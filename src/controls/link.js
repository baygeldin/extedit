import applyStyle from '../utils/apply-style';
import getButton from '../utils/get-button';
import showDialog from '../utils/show-dialog';

export default ($, window, document, state, container) => {
    let rangeBuffer;
    let { selection, contenteditable: context } = state;
    let block = $('<div class="dialog link-dialog" />');
    let input = $('<input type="text" />');
    let link = $('<a href="#">ok</a>');
    block.append(input, link);
    link.on('click', () => {
        if (rangeBuffer) {
            selection.setSingleRange(rangeBuffer);
            applyStyle($, {
                selection,
                context,
                style: `<a href="${input.val()}"/>`,
                selector: 'a'
            });
        }
    });

    let action = () => {
        if (!state.codeMode) {
            selection.refresh();
            rangeBuffer = selection.getRangeAt(0);
            showDialog($, document, block);
        }
    }

    let button = getButton($, { icon: 'icon-link', action });

    container.append(button, block);
};
