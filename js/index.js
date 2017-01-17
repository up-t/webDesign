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
            columnWidth: 160,
            isFitWidth: true
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


$(function(){
 
    // モーダルウィンドウが開くときの処理    
    $(".modalOpen").click(function(){
            
        var navClass = $(this).attr("class"),
            href = $(this).attr("href");
                
            $(href).fadeIn();
        $(this).addClass("open");
        return false;
    });
     
     //description内はクリックイベントを伝搬させない
    $(".description").click(function(){
        event.stopPropagation();
    }); 

    // モーダルウィンドウが閉じるときの処理    
    $(".modalClose").click(function(){
        $(this).parents(".modal").fadeOut();
        $(".modalOpen").removeClass("open");
        return false;
    });  
    
});

$(document).ready(function() {
    $('.simple-menu').sidr();
});