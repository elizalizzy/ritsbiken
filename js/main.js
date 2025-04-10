$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    centerMode: false,
    arrows: true,
     responsive: [
        {
            breakpoint:768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                centerMode: true,
                dots: true
            }
        }
    ]    
});

$(window).scroll(function(){
    var targetElement = $('.fadein').offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll > targetElement - windowHeight + 200){
        $('.fadein').css('opacity', '1');
        $('.fadein').css('transform', 'translateY(0)');
    }
});

