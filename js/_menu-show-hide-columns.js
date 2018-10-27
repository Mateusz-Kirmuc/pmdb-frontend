let table = require('./_table.js');

$('.columns-control__show-column-icon').click(function () {
    $(this).hide();
    $(this).siblings('.columns-control__hide-column-icon').css('display', 'inline');
    let column = table.column($(this).attr('data-column') + ':name');
    column.visible(false);
});

$('.columns-control__hide-column-icon').click(function () {
    $(this).hide();
    $(this).siblings('.columns-control__show-column-icon').css('display', 'inline');
    let column = table.column($(this).attr('data-column') + ':name');
    column.visible(true);
});
