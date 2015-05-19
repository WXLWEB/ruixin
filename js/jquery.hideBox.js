/**
 * Created by pursuer on 15-3-5.
 */
;(function($){
    $.fn.extend({
        "edit_Address":function(){
        $('.addAddress-info').toggle();
        $('.colse-box').click(function(){
            $('.addAddress-info').hide();
        });
        //地区插件引用
        initComplexArea('seachprov', 'seachcity', 'seachdistrict', area_array, sub_array, '10', '0', '0');
    },
    "edit_Invoice":function(){
        $('.addInvoice-info').toggle();
        $('.colse-box').click(function(){
            $('.addInvoice-info').hide();
        });
    },
    "edit_ListenInfo":function(){
        $('.addListenInfo').toggle();
        $('.colse-box').click(function(){
            $('.addListenInfo').hide();
        });
    }
    })
})(jQuery);