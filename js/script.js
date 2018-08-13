/* Sidebar script */

/**
 * Bit of explanation:
 * -tabs are elements inside sidebar
 * -tab has its owm header and eventualy vertically toggleable menu
 */

$(function () {
    var isSidebarExpanded = false;
    var countOpenMenus = 0;

    $('.sidebar').mouseenter(function () {

        timer = setTimeout(function () {
            if (isSidebarExpanded === false) {
                $('.sidebar__tab-icon-wrapper--special').addClass('sidebar__tab-icon-wrapper--special-hover')
                $('.sidebar__tab-header-title').animate({width: 'show'});
                isSidebarExpanded = true;
            }
        }, 600);

    });

    $('.sidebar').mouseleave(function () {
        clearTimeout(timer);
        if (countOpenMenus === 0) {
            $.when(
                $('.sidebar__tab-header-title').animate({width: 'hide'})
            ).done(function () {
                $('.sidebar__tab-icon-wrapper--special').removeClass('sidebar__tab-icon-wrapper--special-hover');
            });
            isSidebarExpanded = false;
        }
    });

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
});
/* Table script */


$(function () {
    var JSON = {
        data: [
            {
                'id': 1,
                'name': 'ADO-01',
                'type': 'chemical',
                'group': '<img class="table__icon" src="img/non-toxic.svg">non-toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1
            },
            {
                'id': 2,
                'name': 'ADO-02',
                'type': 'chemical',
                'group': '<img class="table__icon" src="img/toxic.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1
            },
            {
                'id': 3,
                'name': 'ADO-03',
                'type': 'chemical',
                'group': '<img class="table__icon" src="img/flask.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1
            },
            {
                'id': 4,
                'name': 'ADO-01',
                'type': 'chemical',
                'group': '<img class="table__icon" src="img/light-bulb.svg">non-toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1
            },
            {
                'id': 5,
                'name': 'ADO-02',
                'type': 'chemical',
                'group': '<img class="table__icon" src="img/key.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1
            },
            {
                'id': 6,
                'name': 'ADO-03',
                'type': 'chemical',
                'group': '<img class="table__icon" src="img/lock.svg">lock',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': '',
                'number_of_samples': 1
            },
        ],
        columns: [
            {data: 'id'},
            {title: 'Name', data: 'name'},
            {title: 'Type', data: 'type'},
            {title: 'Group', data: 'group', width: '20%'},
            {title: 'Added on', data: 'added_on'},
            {title: 'Added by', data: 'added_by'},
            {title: 'Author', data: 'author'},
            {title: 'No. of samples', data: 'number_of_samples'}
        ]
    };

    var table = $('.table').DataTable({
        data: JSON.data,
        columns: JSON.columns,
        columnDefs: [
            {
                targets: 0,
                render: function (data) {
                    return '<div class="table__select-container"><input class="table__select table__select--one ' + data + '" type="checkbox"></div>';
                },
                title: '<div class="table__select-container"><input type="checkbox" class="table__select table__select--all"></div>',
                orderable: false
            },
            {
                className: 'table__cell',
                targets: '_all'
            },
            {
                targets: '_all',
                render: function (data) {
                    if (data === [] || data === '' || data === {}) {
                        return '&mdash;';
                    }
                    return data;
                }
            }
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
        }
    });

    $(".sheet__search").keyup(function () {
        table.search(this.value).draw();
    });
});