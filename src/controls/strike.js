import applyStyle from '../utils/apply-style';
import getButton from '../utils/get-button';

export default ($, window, document, state, container) => {
    let action = () => {
        if (!state.codeMode) {
            applyStyle($, {
                selection: state.selection,
                context: state.contenteditable,
                style: '<span style="text-decoration: line-through;" />',
                comparator: function(node) {
                    return node.style.textDecoration === 'line-through'; }
            });
        }
    };

    let button = getButton($, { icon: 'icon-strike', action });

    container.append(button);
}
