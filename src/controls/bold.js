import getButton from '../utils/get-button';

export default ($, window, document, state, container) => {
    let button = getButton($, { icon: 'icon-bold', action: () =>
        document.execCommand('bold', false, null) });

    container.append(button);
}
