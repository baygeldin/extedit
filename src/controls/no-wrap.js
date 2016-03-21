import applyStyle from '../utils/apply-style';
import getButton from '../utils/get-button';

export default ($, window, document, state, container) => {
    let action = () => {
        if (!state.codeMode) {
            applyStyle($, {
                selection: state.selection,
                context: state.contenteditable,
                style: '<span style="white-space: nowrap;" />',
                comparator: function(node) {
                    return node.style.whiteSpace === 'nowrap'; }
            });
        }
    };

    let button = getButton($, { icon: 'icon-lock', action });

    container.append(button);
};
