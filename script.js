$(window).on('scroll', function () {
    // idがq-11の要素の画面最上部からの距離を取得
    let q11 = $('.fadein').offset().top;

    // 画面の高さ
    let wh = $(window).height();
    q11 = q11 + 350;
    // $(window).scrollTop()は現在のスクロール位置
    if (q11 <= $(window).scrollTop() + wh) {
        $('.fadein').removeClass('hide');
    } else {
        $('.fadein').addClass('hide');
    }

})
