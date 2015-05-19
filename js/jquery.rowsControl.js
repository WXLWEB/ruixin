/**
 * Created by pursuer on 15-4-28.
 */
//行数控制
;(function(){
    $.fn.extend({
        "rowsControlText":function(value){
            this.each(function(i){
                var divH = $(this).height();
                var $p = $("p", $(this));
                var $span = $("span",$(this));
                while ($p.outerHeight() > divH) {
                    $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
                }
                while ($span.outerHeight() > divH) {
                    $span.text($span.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
                }
            })
        },
        "rowsControlTitle":function(value){
            this.each(function(i){
                var divH = $(this).height();
                var $h1 = $("h1", $(this));
                while ($h1.outerHeight() > 30) {
                    $h1.text($h1.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
                }
            })
        }
    })
})(jQuery);
