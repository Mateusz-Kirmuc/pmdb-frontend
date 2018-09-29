$(function () {
    $('.menu__exit-icon').click(function () {
        // child will be hide after container
        $('.menu').hide(0, function () {
            $('.menu__content').hide();
        });
    });
});