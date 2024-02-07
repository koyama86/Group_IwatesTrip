// ウインドウがロード or 画面がスクロールされたときに実行
$(window).on("scroll load", function () {
  let windowHeight = $(window).height();    // ウインドウの高さを取得
  let scrollTop = $(window).scrollTop();    // スクロール量を取得
  let transparency = 0;   // 透明度を格納する変数

    // 1つ目の画像に対して処理を実行
  $(".bgimg").each(function () {
    let $connect = $(this);   // 1つめの画像の要素情報を取得
    let image1_pos = $(".scrl").offset().top;   // 1つめの画像(厳密には上に被せているdiv)の位置を取得

    // スクロール量が「ページ最上部 - ウインドウの高さ」を超えたら、if文内の処理を実行
    // そのままの計算だと処理が走るタイミングが早いので、50pxずらしている
    if (scrollTop > image1_pos - windowHeight + 200) {
      transparency = 0 - (scrollTop - image1_pos) / windowHeight + 0.9;  // 透明度を計算(スクロール1回あたりの透明度の間隔を狭めるため、0.5を足している)
      if (transparency < 0.3) {    // 透明度が0.25未満になったら、それ以上透明度を下げないようにする
        transparency = 0.3;
        $connect.css({ opacity: transparency });    // 1つめの画像のopacityプロパティ値を、transparencyの値で設定
      } else {  
        $connect.css({ opacity: transparency });
      }
    }
  });

});