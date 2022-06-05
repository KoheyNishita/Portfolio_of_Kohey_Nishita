<?php
//言語と文字コードを設定
mb_language("Japanese"); 
mb_internal_encoding("UTF-8");

//メールの情報を設定
$mailto = "5024kohy.nishi@gmail.com";
$name = $post;
$message = "本文のテスト\r\n改行します。";
$option= "From:".mb_encode_mimeheader("送信者2")."<test2@example.com>";

//メールの送信
if(mb_send_mail($mailto,$title,$message,$option)){
	echo "メールを送信しました";
}else{
	echo "送信できませんでした";
}
?>