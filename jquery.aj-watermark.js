(function ($) {

    $.fn.extend({

        watermark: function (opts) {

            var defaults = {
                cssclass: 'watermark'
            }

            opts = $.extend(defaults, opts);

            return this.each(function () {

                var elm = $(this);
                var txt = elm.attr('title');

                elm.addClass(opts.cssclass).val(txt);

                elm.focus(function () {

                    if (elm.val() == txt) {

                        elm.removeClass(opts.cssclass).val('');
                    }
                });

                elm.blur(function () {

                    if (elm.val() == '') {

                        elm.addClass(opts.cssclass).val(txt);
                    }
                });
            });
        }
    });

})(jQuery);