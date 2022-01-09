$(document).ready(function() {

    // Slick Slider //
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplaySpeed: 2000,
        autoplay: true
      });

      $('.banner-slider').mouseover(function() {
        $(this).slick('play')
    });

    // Venubox //
    new VenoBox({
        selector: '.my-video-links',
        maxWidth: '600px',
        bgcolor: '#820ef7',
        border: '3px',
        navigation: true,
        popup: true,
        spinner: 'bounce'
    });
    
});

