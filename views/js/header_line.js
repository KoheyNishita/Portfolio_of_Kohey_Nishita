/////////////////////////////
// Header - Add Line
/////////////////////////////

// 1ページ分スクロールするごとに右上のヘッダーの線が1本増える

jQuery( function() {
    var $offset1 = jQuery( '#page1' ).offset();
    var $offset2 = jQuery( '#page2' ).offset();
    var $offset3 = jQuery( '#page3' ).offset();
    var $offset4 = jQuery( '#page4' ).offset();

    jQuery( window ).scroll( function () {
        if( jQuery( window ).scrollTop() > $offset1.top ) {
            jQuery( '#page1' ).addClass( 'fixedLine' );
        } else {
            jQuery( '#page1' ).removeClass( 'fixedLine' );
        }

        if( jQuery( window ).scrollTop() > $offset2.top ) {
            jQuery( '#page2' ).addClass( 'fixedLine' );
        } else {
            jQuery( '#page2' ).removeClass( 'fixedLine' );
        }

        if( jQuery( window ).scrollTop() > $offset3.top ) {
            jQuery( '#page3' ).addClass( 'fixedLine' );
        } else {
            jQuery( '#page3' ).removeClass( 'fixedLine' );
        }

        if( jQuery( window ).scrollTop() > $offset4.top ) {
            jQuery( '#page4' ).addClass( 'fixedLine' );
        } else {
            jQuery( '#page4' ).removeClass( 'fixedLine' );
        }
    } );
} );