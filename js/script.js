$(function () {
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
            $('.manipulate-menu').show();
        });
    });

    $('.sheet__show-filter-menu').click(function () {
        $('.menu-container').hide();
        // child will show after parent
        $('.menu').show(0, function () {
            $('.filter-menu').show();
        });
    });

    $('.menu-header__clear-icon').click(function () {
        $('.filter-menu .form-control').val(null).trigger('change');
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
});
/* Sidebar script */

/**
 * Bit of explanation:
 * -tabs are elements inside sidebar
 * -tab has its owm header and eventualy vertically toggleable menu
 */

$(function () {
    var isSidebarExpanded = false;
    var countOpenMenus = 0;

    var sidebarMouseenterHandler = function (event, delay = 100) {
        timer = setTimeout(function () {
            if (isSidebarExpanded === false) {
                $('.sidebar__tab-icon-wrapper--special').addClass('sidebar__tab-icon-wrapper--special-hover')
                $('.sidebar__tab-header-title').animate({width: 'show'});
                isSidebarExpanded = true;
            }
        }, delay);
    };

    var sidebarMouseleaveHandler = function () {
        clearTimeout(timer);
        if (countOpenMenus === 0) {
            $.when(
                $('.sidebar__tab-header-title').animate({width: 'hide'})
            ).done(function () {
                $('.sidebar__tab-icon-wrapper--special').removeClass('sidebar__tab-icon-wrapper--special-hover');
                $('.sidebar').addClass('sidebar--hoverable');
            });
            isSidebarExpanded = false;
        }
    };

    $('.sidebar').mouseenter(sidebarMouseenterHandler);

    $('.sidebar').mouseleave(sidebarMouseleaveHandler);

    $('.sidebar__tab-menu').on('customSlideUp', function (e) {
        $(this).slideUp(function () {
            countOpenMenus--;

            // check if mouse is not over sidebar
            if (!$('.sidebar:hover').length) {
                $('.sidebar').trigger('mouseleave');
            }
        });
    });

    $('.sidebar__tab-menu').on('customSlideDown', function (e) {
        $(this).slideDown();
    });

    $('.sidebar__tab-header').click(function () {
        $(this).find('.sidebar__tab-arrow').toggleClass('sidebar__tab-arrow--rotated')

        if (!$(this).hasClass('sidebar__tab-header--special')) {
            $('.tab-selected').toggleClass('tab-selected');
            $(this).addClass('tab-selected');
        }

        var tabMenu = $(this).siblings('.sidebar__tab-menu');
        if (isSidebarExpanded) {
            if (tabMenu.is(':hidden')) {
                tabMenu.trigger('customSlideDown');
                countOpenMenus++;
            }
            else {
                tabMenu.trigger('customSlideUp');
            }
        }
    });

    $('.nav-bar__toggle-sidebar').click(function () {
        var sidebar = $('.sidebar');

        // expand sidebar
        if (sidebar.hasClass('hover-on') && !isSidebarExpanded) {
            sidebar.trigger('mouseenter', 0);
            sidebar.off('mouseenter mouseleave');
            sidebar.toggleClass('hover-on hover-off sidebar--hoverable');

        }

        // hide sidebar
        else if (sidebar.hasClass('hover-off')) {
            sidebar.on('mouseenter', sidebarMouseenterHandler);
            sidebar.on('mouseleave', sidebarMouseleaveHandler);
            sidebar.trigger('mouseleave');
            sidebar.toggleClass('hover-on hover-off');
        }
    });
});

/* Table script */


$(function () {
    var JSON_duza_tabela = {
        data: [
            {
                'id': 1,
                'name': '<a href="#" class="table__name-link">ADO-01</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/non-toxic.svg">non-toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 2,
                'name': '<a href="#" class="table__name-link">ADO-02</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/toxic.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 3,
                'name': '<a href="#" class="table__name-link">ADO-03</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/flask.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 4,
                'name': '<a href="#" class="table__name-link">ADO-04</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/light-bulb.svg">non-toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 5,
                'name': '<a href="#" class="table__name-link">ADO-05</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/key.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 1,
                'name': '<a href="#" class="table__name-link">ADO-01</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/non-toxic.svg">non-toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 2,
                'name': '<a href="#" class="table__name-link">ADO-02</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/toxic.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 3,
                'name': '<a href="#" class="table__name-link">ADO-03</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/flask.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 4,
                'name': '<a href="#" class="table__name-link">ADO-04</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/light-bulb.svg">non-toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 5,
                'name': '<a href="#" class="table__name-link">ADO-05</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/key.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 1,
                'name': '<a href="#" class="table__name-link">ADO-01</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/non-toxic.svg">non-toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 2,
                'name': '<a href="#" class="table__name-link">ADO-02</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/toxic.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 3,
                'name': '<a href="#" class="table__name-link">ADO-03</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/flask.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 4,
                'name': '<a href="#" class="table__name-link">ADO-04</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/light-bulb.svg">non-toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 5,
                'name': '<a href="#" class="table__name-link">ADO-05</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/key.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 1,
                'name': '<a href="#" class="table__name-link">ADO-01</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/non-toxic.svg">non-toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 2,
                'name': '<a href="#" class="table__name-link">ADO-02</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/toxic.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 3,
                'name': '<a href="#" class="table__name-link">ADO-03</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/flask.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 4,
                'name': '<a href="#" class="table__name-link">ADO-04</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/light-bulb.svg">non-toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 5,
                'name': '<a href="#" class="table__name-link">ADO-05</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/key.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 1,
                'name': '<a href="#" class="table__name-link">ADO-01</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/non-toxic.svg">non-toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 2,
                'name': '<a href="#" class="table__name-link">ADO-02</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/toxic.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 3,
                'name': '<a href="#" class="table__name-link">ADO-03</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/flask.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 4,
                'name': '<a href="#" class="table__name-link">ADO-04</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/light-bulb.svg">non-toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            },
            {
                'id': 5,
                'name': '<a href="#" class="table__name-link">ADO-05</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/key.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1,
                'random_column_1': 'Random text 1',
                'random_column_2': 'Random text 2',
            }
        ],
        columns: [
            {data: 'id'},
            {title: 'Name', data: 'name'},
            {title: 'Type', data: 'type'},
            {title: 'Group', data: 'group'},
            {title: 'Added on', data: 'added_on'},
            {title: 'Added by', data: 'added_by'},
            {title: 'Author', data: 'author'},
            {title: 'No. of samples', data: 'number_of_samples'},
            {title: 'Random column 1', data: 'random_column_1'},
            {title: 'Random column 2', data: 'random_column_2'},
        ]
    };

    var JSON_mala_tabela = {
        data: [
            {
                'id': 1,
                'name': '<a href="#" class="table__name-link">ADO-01</a>',
                'type': 'chemical',
            },
            {
                'id': 2,
                'name': '<a href="#" class="table__name-link">ADO-02</a>',
                'type': 'chemical',
            },
            {
                'id': 3,
                'name': '<a href="#" class="table__name-link">ADO-03</a>',
                'type': 'chemical',
            },
            {
                'id': 4,
                'name': '<a href="#" class="table__name-link">ADO-04</a>',
                'type': 'chemical',
            },
            {
                'id': 5,
                'name': '<a href="#" class="table__name-link">ADO-05</a>',
                'type': 'chemical',
            },
        ],
        columns: [
            {data: 'id'},
            {title: 'Name', data: 'name'},
            {title: 'Type', data: 'type'},
        ]
    };

    var table = $('._table').DataTable({
        data: JSON_duza_tabela.data,
        columns: JSON_duza_tabela.columns,
        columnDefs: [
            {
                targets: 0,
                render: function (data) {
                    return '<div class="table__select-container"><input class="table__select table__select--one ' + data + '" type="checkbox"></div>';
                },
                title: '<div class="table__select-container"><input type="checkbox" class="table__select table__select--all"></div>',
                width: '25px',
                orderable: false
            },
            {
                targets: '_all',
                className: 'table__cell'

            },
            {
                targets: '_all',
                render: function (data) {
                    if (data === [] || data === '' || data === {}) {
                        return '&mdash;';
                    }
                    return data;
                }
            },
        ],
        order: [],
        paging: false,
        info: false,
        dom: 't',
        autoWidth: false,
        createdRow: function (row) {
            $(row).addClass('table__row');
        },
        initComplete: function () {
            $('.table__thead > tr').addClass('table__row table__row--header');
            $('th').addClass('table__cell--header');
            $('.table__cell--header.sorting').append('<img class="table__sort-icon" src="img/arrows.svg">');
            $('.table__cell--header:not(:first-child)').addClass('table__cell--header-no-checkbox');

            $('.table__name-link').click(function () {
                $('.menu-container').hide();
                // child will show after parent
                $('.menu').show(0, function () {
                    $('.details').show();
                });

            });

            $('.table__select--one').change(function () {
                showHideManipulationIcons();
            })
        }
    });

    $(table.table().container()).addClass('sheet__table-wrapper');

    $(".sheet__search").keyup(function () {
        table.search(this.value).draw();
    });

    $('.sorting.table__cell--header.table__cell--header-no-checkbox').click(function () {
        $('.table__sort-icon-sorted')
            .replaceWith('<img class="table__sort-icon" src="img/arrows.svg">');

        if ($(this).hasClass('sorting_asc')) {
            $(this)
                .children('.table__sort-icon')
                .replaceWith('<img class="table__sort-icon table__sort-icon-sorted" src="img/sort_asc.svg">');
        }

        if ($(this).hasClass('sorting_desc')) {
            $(this)
                .children('.table__sort-icon')
                .replaceWith('<img class="table__sort-icon table__sort-icon-sorted" src="img/sort_desc.svg">');
        }
    });

    $('.table__select--all').click(function () {
        var all_checked = $(this).prop('checked');

        if (all_checked) {
            $('.table__select--one').prop('checked', true);
        } else {
            $('.table__select--one').prop('checked', false);
        }
        showHideManipulationIcons();
    });

    /**
     * Decide whether show or hide table rows manipulation icons (edit, delete, import) basing on number of selected rows
     */
    function showHideManipulationIcons() {
        let numberOfSelectedRows = $('.table__select:checked').length;

        if (numberOfSelectedRows === 0) {
            $('.sheet__manipulation-icon').css('visibility', 'hidden');
        }
        if (numberOfSelectedRows === 1) {
            $('.sheet__manipulation-icon:not(:first-child)').css('visibility', 'visible');
            $('.sheet__manipulation-icon:first-child').css('visibility', 'hidden');
        }
        if (numberOfSelectedRows > 1) {
            $('.sheet__manipulation-icon').css('visibility', 'visible');
        }
    }
});
