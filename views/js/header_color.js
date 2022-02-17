/////////////////////////////
// Header - Color Change
/////////////////////////////

// jQuery
// 1ページ分だけスクロールしたらヘッダーが透明になる

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

// 逆再生
$(function () {
    var $offset1 = $('#page1').offset();

    $(window).scroll(function () {
        if ($(window).scrollTop() < $offset1.top - 64) {
            $('.header headerColorChanged').removeClass('headerColorChanged');
            $('.header-list a headerTextChanged').removeClass('headerTextChanged');

        } else {
            $('.header').addClass('headerColorChanged');
            $('.header-list a').addClass('headerTextChanged');
        }
    });
});