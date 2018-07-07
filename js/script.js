$(function () {
    var isSidebarExpanded = false;
    var countOpenMenus = 0;

    $('.sidebar').hover(function () {
        if (countOpenMenus === 0){
            $('.toggleable')
                .animate({width: 'toggle'})
        }
        isSidebarExpanded = !isSidebarExpanded;

    });

    $('.sidebar__tab-menu').on('customSlideUp', function (e) {
        $(this).slideUp(function() {
            countOpenMenus--;
            if(!$('.sidebar:hover').length){
                $('.sidebar').trigger('mouseleave');
                isSidebarExpanded = !isSidebarExpanded;
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