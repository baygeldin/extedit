export default ($, document, block) => {
    function handler(e) {
        if (!block.is(e.target) && block.has(e.target).length === 0) {
            $(document).off('mouseup', handler);
            block.hide();
        }
    }

    $(document).on('mouseup', handler);
    block.show();
};
