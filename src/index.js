import './css/main.css';
import rangy from 'rangy';
import controls from './controls';
import insertHTML from './utils/insert-html';

(function($, window, document){
    let state = {
        codeMode: false,
        contenteditable: null,
        textarea: null,
        selection: null
    };

    $(document).ready(() => {
        rangy.init();
        state.selection = rangy.getSelection();
    });

    $.fn.extedit = function(method) {
        let methods = {
            initialize(options) {
                let controlsList = options.controls.split(' ');
                let list = $('<ul class="controls"/>');

                state.contenteditable = $(`<div class="text"
                    contenteditable>${options.content}</div>`);
                state.textarea = $('<textarea class="code"/>');

                controlsList.forEach(name => {
                    if (!controls[name]) {
                        $.error(`${name} control not found`); }
                    let container = $('<li/>');
                    controls[name]($, window, document, state, container);
                    list.append(container);
                });

                state.contenteditable.keydown(e => {
                    if (e.keyCode === 13) {
                        insertHTML($, { selection: state.selection,
                            markup: '<br/>' });
                        return false;
                    }
                });

                this.html($('<div class="extedit"/>').append(list,
                    state.contenteditable, state.textarea));
            },

            getContent() {
                return state.contenteditable.html();
            }
        };

        if (methods[method]) {
            return methods[method].apply(this, [].slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method ) {
            return methods.initialize.apply(this, arguments);
        } else {
            $.error(`Method with name ${method} not exist in jQuery.extedit`);
        }
    };

})(jQuery, window, document);
