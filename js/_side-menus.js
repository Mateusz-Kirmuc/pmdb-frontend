/* Side menus script */

// $(function () {
    $('.menu__exit-icon').click(function () {
        // child will be hide after container
        $('.menu').hide(0, function () {
            $('.menu-container').hide();
        });
    });

    $('.sheet__show-column-control-menu').click(function () {
        $('.menu-container').hide();
        // child will show after parent
        $('.menu').show(0, function () {
            $('.columns-control').show();
        });
    });

    $('.sheet__show-manipulation-menu').click(function () {
        $('.menu-container').hide();
        // child will show after parent
        $('.menu').show(0, function () {
            $('.menu-manipulate').show();
        });
    });

    $('.sheet__show-filter-menu').click(function () {
        $('.menu__content').hide();
        // child will show after parent
        $('.menu').show(0, function () {
            $('.menu-filter').show();
        });
    });

    $('.menu-header__clear-icon').click(function () {
        $('.menu-filter .form-control').val(null).trigger('change');
    });

    $('.manipulate-form').submit(function (event) {
        $.ajax({
            'url': '',
            'type': 'post',
            'contentType': 'json',
            'data': $(this).serializeArray(),
            'success': function (result, status, xhr) {

            },
            'error': function (xhr, status, error) {

            }
        });
    });

    $('.custom-select').select2({
        width: '100%',
        theme: 'bootstrap4'
    });
// });