/////////////////////////////
// Header
/////////////////////////////

// Scroll -> Back Color: Transparent, Font Color: White

// if ('100vh' < jQuery(this).scrollTop()) {
//     jQuery('.header').addClass('header-scrolled');
// } else {
//     jQuery('.header').removeClass('header-scrolled');
// }

$(function () {
    $(window).on("scroll", function () {
        const sliderHeight = $(".page profile").height();
        if (sliderHeight - 30 < $(this).scrollTop()) {
            $(".js-header").addClass("headerScroll");
        } else {
            $(".js-header").removeClass("headerScroll");
        }
    });
});