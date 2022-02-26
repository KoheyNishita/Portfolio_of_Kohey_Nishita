///////////////////////////////////////////
// Back - Back Image Moves
///////////////////////////////////////////

// jQuery
// ページの上下スクロールに応じて背景画像も上下に動く

$(window).on('scroll', function () {

    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 4; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

    if (bgPosition) {
        $('#back-js').css('background-position', 'left top +' + bgPosition + 'px');
    }
});

