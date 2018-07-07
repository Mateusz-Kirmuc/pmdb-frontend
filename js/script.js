//  .
/**
 * Bit of explanation:
 * -tabs are elements inside sidebar
 * -tab has its owm header and eventualy vertically toggleable menu
 */

$(function () {
    var isSidebarExpanded = false;
    var countOpenMenus = 0;

    $('.sidebar').mouseenter(function () {
        $('.sidebar__tab-header-title').animate({width: 'show'});
        isSidebarExpanded = true;
    });

    $('.sidebar').mouseleave(function () {
        if (countOpenMenus === 0) {
            $('.sidebar__tab-header-title').animate({width: 'hide'});
            isSidebarExpanded = false;
        }
    });

    $('.sidebar__tab-menu').on('customSlideUp', function (e) {
        $(this).slideUp(function() {
            countOpenMenus--;

            // check if mouse is not over sidebar
            if(!$('.sidebar:hover').length){
                $('.sidebar').trigger('mouseleave');
            }
        });
    });

    $('.sidebar__tab-menu').on('customSlideDown', function (e) {
        $(this).slideDown();
    });

    $('.sidebar__tab-header').click(function () {
        $(this).find('.sidebar__tab-arrow').toggleClass('sidebar__tab-arrow--rotated')

        $('.tab-selected').toggleClass('tab-selected');
        $(this).addClass('tab-selected');

        var tabMenu = $(this).siblings('.sidebar__tab-menu');
        if(isSidebarExpanded) {
            if (tabMenu.is(':hidden')){
                tabMenu.trigger('customSlideDown');
                countOpenMenus++;
            }
            else {
                tabMenu.trigger('customSlideUp');
            }
        }
    });
});