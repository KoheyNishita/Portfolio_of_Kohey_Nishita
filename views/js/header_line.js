/////////////////////////////
// Header - Add Line
/////////////////////////////

// jQuery
// 1ページ分スクロールするごとに右上のヘッダーの線が1本増える

$(function () {
    // offsetは座標位置を取得する
    var $offset1 = $('#page01').offset();
    var $offset2 = $('#page02').offset();
    var $offset3 = $('#page03').offset();
    var $offset4 = $('#page04').offset();

    $(window).scroll(function () {
        if ($(window).scrollTop() > $offset1.top - 66) {
            $('#page01').addClass('fixedLine');
        } else {
            $('#page01').removeClass('fixedLine');
            $('#page01').css({ 'position': 'fixed' });
        }

        if ($(window).scrollTop() > $offset2.top - 66) {
            $('#page02').addClass('fixedLine');
        } else {
            $('#page02').removeClass('fixedLine');
            $('#page02').css({ 'position': 'fixed' });
        }

        if ($(window).scrollTop() > $offset3.top - 66) {
            $('#page03').addClass('fixedLine');
        } else {
            $('#page03').removeClass('fixedLine');
            $('#page03').css({ 'position': 'fixed' });
        }

        if (window.matchMedia("(max-width: 479px)").matches) {
            // windowの幅が479px以下（Smartphone）
            if ($(window).scrollTop() > $offset4.top / 1.15) {
                $('#page04').addClass('fixedLine');
            } else {
                $('#page04').removeClass('fixedLine');
                $('#page04').css({ 'position': 'fixed' });
                console.log($offset4);
                console.log($offset3);
            }
        } else {
            // windowの幅が479px以上（PC）
            if ($(window).scrollTop() > $offset4.top - 66) {
                $('#page04').addClass('fixedLine');
            } else {
                $('#page04').removeClass('fixedLine');
                $('#page04').css({ 'position': 'fixed' });
            }
        }
    });
});