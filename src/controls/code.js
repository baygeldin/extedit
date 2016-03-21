import getButton from '../utils/get-button';

export default ($, window, document, state, container) => {
    let { codeMode, textarea, contenteditable } = state;
    let action = () => {
        codeMode ? contenteditable.html(textarea.val()) :
            textarea.val(contenteditable.html());
        codeMode = !codeMode;
        contenteditable.toggle();
        textarea.toggle();
    };

    let button = getButton($, { icon: 'icon-code', action });

    container.append(button);
};
