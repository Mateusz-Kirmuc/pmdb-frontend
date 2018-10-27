module.exports = function () {
    $('.columns-control__show-column-icon').click(function () {
        $(this).hide();
        $(this).siblings('.columns-control__hide-column-icon').css('display', 'inline');

    });

    $('.columns-control__hide-column-icon').click(function () {
        $(this).hide();
        $(this).siblings('.columns-control__show-column-icon').css('display', 'inline');
    })
};
