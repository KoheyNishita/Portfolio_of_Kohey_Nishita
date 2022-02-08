/////////////////////////////
// Header
/////////////////////////////

// ページの上下スクロールに応じて背景画像も上下に動く
// ページ高さが400vh動いている間に画像が200vh動く
$(window).on('scroll', function () {

    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 2; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

    if (bgPosition) {
        $('#back-js').css('background-position', 'center top -' + bgPosition + 'px');
    }
});

