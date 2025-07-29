// リンクリスト
const link_list = [
    {url: "https://www.hbr-tool.com/", title: "ダメージ計算式改修後"},
]

$(function(){ 
    let ui = $("<ul>").addClass('gNav-menu');
    link_list.forEach(element => {
        ui.append($('<li>').append($('<a>', {class: 'header_link', href: element.url, text: element.title})));
    });
    let headerHTML = $('<div>', {class: 'hamburger'})
        .append($('<img>', {class: 'logo', src: 'img/title_log.png'}))
        .append($('<p>', {class: 'btn-gNav'})
            .append($('<span>'))
            .append($('<span>'))
            .append($('<span>'))
        )
        .append($('<nav>', {class: 'gNav'})
            .append(ui)
        );

    $(".header").append(headerHTML);
    $('.btn-gNav').on("click", function () {
		$('.gNav').toggleClass('open');
	});
});
