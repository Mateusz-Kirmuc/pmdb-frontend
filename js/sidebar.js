/* Sidebar script */

/**
* Bit of explanation:
* -tabs are elements inside sidebar
* -tab has its owm header and eventualy vertically toggleable menu
*/

var isSidebarExpanded = false;
var countOpenMenus = 0;

var sidebarMouseenterHandler = function (event, delay = 100) {
    timer = setTimeout(function () {
        if (isSidebarExpanded === false) {
            $('.sidebar__tab-icon-wrapper--special').addClass('sidebar__tab-icon-wrapper--special-hover');
            $('.sidebar__tab-header-title').animate({width: $('.sidebar__tab-header-title').css('max-width')});
            $('.sidebar__tab-menu').animate({width: $('.sidebar__tab-menu').css('max-width')});

            isSidebarExpanded = true;
        }
    }, delay);
};

var sidebarMouseleaveHandler = function () {
    clearTimeout(timer);
        $.when(
            $('.sidebar__tab-header-title, .sidebar__tab-menu').animate({width: '0px'})
        ).done(function () {
            $('.sidebar__tab-icon-wrapper--special').removeClass('sidebar__tab-icon-wrapper--special-hover');
            $('.sidebar').addClass('sidebar--hoverable');
        });
        isSidebarExpanded = false;
};

$('.sidebar').mouseenter(sidebarMouseenterHandler);

$('.sidebar').mouseleave(sidebarMouseleaveHandler);

$('.sidebar__tab-menu').on('customSlideUp', function (e) {
    $(this).animate({height: 0}, function () {
        countOpenMenus--;

        // check if mouse is not over sidebar
        if (!$('.sidebar:hover').length) {
            $('.sidebar').trigger('mouseleave');
        }
    });
});

$('.sidebar__tab-menu').on('customSlideDown', function (e) {
    $(this).animate({height: $(this).get(0).scrollHeight});
});

$('.sidebar__tab-header').click(function () {
    $(this).find('.sidebar__tab-arrow').toggleClass('sidebar__tab-arrow--rotated')

    if (!$(this).hasClass('sidebar__tab-header--special')) {
        $('.tab-selected').toggleClass('tab-selected');
        $(this).addClass('tab-selected');
    }

    var tabMenu = $(this).siblings('.sidebar__tab-menu');
    if (isSidebarExpanded) {
        if (tabMenu.height() === 0) {
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
