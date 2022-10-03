$(function () {
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
    // ハンバーガーメニュー
    $('.menu-trigger').on('click', function () {
        $('.nav-list').toggleClass('is-active');
    });



    // リヴァイ
    $(window).on('scroll', function () {
        let levi = $('.levi').offset().top;
        let wh = $(window).height();
        // $(window).scrollTop()は現在のスクロール位置
        if (levi <= $(window).scrollTop() + wh) {
            $('.levi').removeClass('levihide');
        } else {
            $('.levi').addClass('levihide');
        }

    })
    //   アルミン

    // alumin = alumin + 250
    $(window).on('scroll', function () {
        let alumin = $('.alumin').offset().top;
        let wh2 = $(window).height();

        if (alumin <= $(window).scrollTop() + wh2) {
            $('.alumin').removeClass('aluminhide');
        } else {
            $('.alumin').addClass('aluminhide');
        }

    })



    //   ハンバーガーメニュー
    $('.menu-trigger').on('click', function () {
        $('.menu-trigger').toggleClass('active')

    })
    $('.menu-trigger').on('click', function () {
        if ($('.menu-trigger').hasClass('active')) {
            $('html').css('overflow-y', 'hidden');
            
        } else  {
            /*縦スクロールバーを出す*/
            $('html').css('overflow-y', 'scroll');
        }
    });


})
$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
});

