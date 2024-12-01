//ハンバーガー
$('#hamburger-button').on('click', function() {
    $('.navigation-group').toggleClass('active');
});

// ナビゲーションアイテムをクリックしたときにメニューを閉じる
$('.navigation-item a').on('click', function() {
    $('.navigation-group').removeClass('active');
});


// 画面幅を変更したときにメニューを閉じる
$(window).on('resize', function() {
    if ($(window).width() > 768) {
        $('.navigation-group').removeClass('active');
    }
});

// タブ
$('#smarttab').smartTab({
	enableUrlHash: false,
});


