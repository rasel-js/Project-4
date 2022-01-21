$(document).ready(function(){

// init Isotope
    var $grid = $('.portfolio-items').isotope({
    // options
  });
  // filter items on button click
  $('.menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });

    // filter items on button active
    $(this).addClass('active').siblings().removeClass('active');




});
    

});