// jQuery(function($){
//     $('.jacket-area').masonry({
//         itemSelector: '.item',
//         columnWidth: 180,
//         isFitWidth: true  //親要素の幅に合わせてカラム数を自動調整
//     });
// });

//masonry
$(function() {
        $('.jacket-area').masonry({
            columnWidth: 160
        });
});

//張り付くメニューバー
$(window).load(function(){
    $("#menubar").sticky({ topSpacing: 0 });
});

/*   isotope start  */
//ref:http://on-ze.com/archives/1868
//初期化
$(function() {
    $('.jacket-area').isotope({
        itemSelector: '.item',
    });


    $('.element a').click(function(){
        console.log("test");
        $('.element .current').removeClass('current');
        $(this).addClass('current');
     

        var selector = $(this).attr('data-filter');
        $('.jacket-area').isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
                }
            });
        return false;
    });
});
/*   isotope end   */