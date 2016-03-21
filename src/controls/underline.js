import getButton from '../utils/get-button';

export default ($, window, document, state, container) => {
    let button = getButton($, { icon: 'icon-underline', action: () =>
        document.execCommand('underline', false, null) });

    container.append(button);
}
