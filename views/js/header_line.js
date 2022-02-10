/////////////////////////////
// Header - Add Line
/////////////////////////////

// jQuery
// 1ページ分スクロールするごとに右上のヘッダーの線が1本増える

$(function () {
    // offsetは座標位置を取得する
    var $offset1 = $('#page1').offset();
    var $offset2 = $('#page2').offset();
    var $offset3 = $('#page3').offset();
    var $offset4 = $('#page4').offset();

    $(window).scroll(function () {
        if ($(window).scrollTop() > $offset1.top) {
            $('#page1').addClass('fixedLine');
        } else {
            $('#page1').removeClass('fixedLine');
        }

        if ($(window).scrollTop() > $offset2.top) {
            $('#page2').addClass('fixedLine');
        } else {
            $('#page2').removeClass('fixedLine');
        }

        if ($(window).scrollTop() > $offset3.top) {
            $('#page3').addClass('fixedLine');
        } else {
            $('#page3').removeClass('fixedLine');
        }

        if ($(window).scrollTop() > $offset4.top) {
            $('#page4').addClass('fixedLine');
        } else {
            $('#page4').removeClass('fixedLine');
        }
    });
});