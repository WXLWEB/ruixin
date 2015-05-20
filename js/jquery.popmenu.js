/*
jQuery Pop Menu
Version: beta
Author: Guc. http://www.gucheen.pro
Based on jQuery 2.0.3
*/

(function ($) {

    $.fn.popmenu = function (options) {

        var settings = $.extend({
            'controller': true,
            'width': '100%',
            'background': '#fff',
            'focusColor': '#0D4D94',
            'borderRadius': '0',
            'bottom': '0',
            'left': '0',
            'fontSize':'1.2em',
            'iconSize': '100px'
        }, options);
        if (settings.controller === true) {
            var temp_display = 'none';
        } else {
            var temp_display = 'block';
        }
        var tar = $(this);
        var tar_body = tar.children('ul');
        var tar_list = tar_body.children('li');
        var tar_a = tar_list.children('a');
        var tar_ctrl = tar.children('.pop_ctrl');

        function setIt() {
            tar_body.css({
                'display': temp_display,
                'position': 'fixed',
                'margin-top': -settings.fontSize*2,
                'bottom':settings.bottom,
                'left':settings.left,
                'z-index':1000,
                'margin-left': -settings.left,
                'background': settings.background,
                'width': settings.width,
                'float': 'left',
                'padding': '0',
                'border-radius': settings.borderRadius
            });
            tar_list.css({
                'display': 'inline-block',
                'float': 'left',
                'width': '50%',
                'text-align': 'center',
                'border-radius': settings.borderRadius
            });
            tar_a.css({
                'display': 'block',
                'float': 'left',
                'width': '100%',
                'padding': '1em',
                'fontSize':'1.2em',
                'text-decoration': 'none',
                'color': '#0D4D94'
            });
            tar_ctrl.hover(function () {
                tar_ctrl.css('cursor', 'pointer');
            }, function () {
                tar_ctrl.css('cursor', 'default')
            });
            tar_ctrl.click(function (e) {
                e.preventDefault();
                tar_body.show('fast');
                $(document).mouseup(function (e) {
                    var _con = tar_body;
                    if (!_con.is(e.target) && _con.has(e.target).length === 0) {
                        _con.hide();
                    }
                    _con.hide(); //some functions you want
                });
            });
            tar_a.hover(function () {
                $(this).css({
                    'background': settings.focusColor,
                    'cursor': 'pointer',
                    'color':'#fff'

                });
            }, function () {
                $(this).css({
                    'background': settings.background,
                    'cursor': 'default',
                    'color':settings.focusColor

                });
            });
        }
        return setIt();

    };

}(jQuery));