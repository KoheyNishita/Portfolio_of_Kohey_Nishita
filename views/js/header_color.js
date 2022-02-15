/////////////////////////////
// Header - Color Change
/////////////////////////////

$(function () {
    var $offset1 = $('#page1').offset();

    $(window).scroll(function () {
        if ($(window).scrollTop() > $offset1.top - 64) {
            $('.header').addClass('headerColorChanged');
            $('.header-list a').addClass('headerTextChanged');

        } else {
            $('.header').removeClass('headerColorChanged');
            $('.header-list a').removeClass('headerTextChanged');
        }
    });
});