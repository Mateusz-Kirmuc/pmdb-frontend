$(function () {
    $('.menu__exit-icon').click(function () {
        // child will be hide after container
        $('.menu').hide(0, function () {
            $('.menu__content').hide();
        });
    });

    $('.sheet__show-column-control-menu').click(function () {
        $('.menu__content').hide();
        // child will show after parent
        $('.menu').show(0, function () {
            $('.columns-control').show();
        });
    });

    $('.sheet__show-manipulation-menu').click(function () {
        $('.menu__content').hide();
        // child will show after parent
        $('.menu').show(0, function () {
            $('.manipulate-menu').show();
        });
    });

    $('.sheet__show-filter-menu').click(function () {
        $('.menu__content').hide();
        // child will show after parent
        $('.menu').show(0, function () {
            $('.filter-menu').show();
        });
    });

    $('.custom-select').select2({
        width: '100%',
        theme: 'bootstrap4'
    });
});