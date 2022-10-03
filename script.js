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


})


// ハンバーガーメニューを押したら
// 一つに重なる
