export default ($, options) => {
    let button = $(`<a href="#"><i class="${options.icon}"></i></a>`);
    button.on('click', options.action);

    return button;
};
