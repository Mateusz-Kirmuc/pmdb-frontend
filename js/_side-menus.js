$(function () {
    $('.menu__exit-icon').click(function () {
        // child will be hide after container
        $('.menu').hide(0, function () {
            $('.menu__content').hide();
        });
    });

    $('.sheet__show-column-control-menu').click(function () {
        // child will show after parent
        $('.menu').show(0, function () {
            $('.columns-control').show();
        });
    });
});