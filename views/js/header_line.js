/////////////////////////////
// Header - Add Line
/////////////////////////////

// 1ページ分スクロールするごとに右上のヘッダーの線が1本増える

$(window).on('scroll', function () {
    var tmp = document.getElementsByClassName("header-line-box-right"); // cssからclassを取得
    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 2; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）
    if (bgPosition) {
        //付与するid名
        var val = "page1";
        //id属性追加
        tmp[0].setAttribute("id", val);
    }


});

// $(window).on('scroll', function () {

//     var scrollTop = $(window).scrollTop();
//     var bgPosition = scrollTop / 2; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

//     if (bgPosition) {
//         $('#header-line-js').css('background-position', 'center top -' + bgPosition + 'px');
//     }
// });
