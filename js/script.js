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
            if(!$('.sidebar:hover').length){
                $('.sidebar').trigger('mouseleave');
            }
        });
    });

    $('.sidebar__tab-menu').on('customSlideDown', function (e) {
        $(this).slideDown();
    });

    $('.sidebar__tab-header').click(function () {
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