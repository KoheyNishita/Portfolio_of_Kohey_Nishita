/////////////////////////////
// Header - Color Change
/////////////////////////////

// jQuery
// 1ページ分スクロールしたらヘッダーの背景色が透明・文字色が白になる

// if ('100vh' < jQuery(this).scrollTop()) {
//     jQuery('.header').addClass('header-scrolled');
// } else {
//     jQuery('.header').removeClass('header-scrolled');
// }

$(function () {
    $(window).on("scroll", function () {
        const sliderHeight = $(".page profile").height();
        if (sliderHeight - 30 < $(this).scrollTop()) {
            $(".header").addClass("headerScroll");
        } else {
            $(".header").removeClass("headerScroll");
        }
    });
});