// jQuery(function($){
//     $('.jacket-area').masonry({
//         itemSelector: '.item',
//         columnWidth: 180,
//         isFitWidth: true  //親要素の幅に合わせてカラム数を自動調整
//     });
// });

$(function() {
    $('.jacket-area').masonry({
        columnWidth: 160
    });
});

$(window).load(function(){
   $("#menubar").sticky({ topSpacing: 0 });
});

$('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

$('#menubar').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});