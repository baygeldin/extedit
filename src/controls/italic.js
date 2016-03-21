import getButton from '../utils/get-button';

export default ($, window, document, state, container) => {
    let button = getButton($, { icon: 'icon-italic', action: () =>
        document.execCommand('italic', false, null) });

    container.append(button);
}
