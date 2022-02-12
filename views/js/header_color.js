/////////////////////////////
// Header - Color Change
/////////////////////////////

$(function () {
    var $offset1 = $('#page1').offset();

    $(window).scroll(function () {
        if ($(window).scrollTop() > $offset1.top - 64) {
            $('.header').addClass('headerFadeOut');
            $('.header').addClass('headerColorChanged');
        } else {
            $('.header').removeClass('headerColorChanged');
        }
    });
});