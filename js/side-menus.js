/* Side menus script */

let filterApiUrl = '/api/project/datatable/';
let createApiUrl = '/api/project/create/';

$('.menu__exit-icon').click(function () {
    hideMenu();
});

$('.sheet__show-column-control-menu').click(function () {
    showMenu($('.columns-control'));
});

$('.sheet__show-manipulation-menu').click(function () {
    showMenu($('.menu-manipulate'));

});

$('.sheet__show-filter-menu').click(function () {
    showMenu($('.menu-filter'));
});

$('.sheet__show-choices-menu').click(function () {
    showMenu($('.menu-choices'))
});

function hideMenu() {
    $('.menu').animate({'width': 'hide'}, {'duration': 700});
}

function showMenu(menuContent) {
    $('.menu').animate({'width': 'hide'}, {'duration': 700, 'complete': function () {
            $('.menu-container').hide();
            menuContent.show();
        }
    });
    $('.menu').animate({'width': 'show'}, {'duration': 700});
}

$('.menu-filter__clear-container').click(function () {
    $('.menu-filter .form-control').val(null).trigger('change');
});

// ajax project create for /create/ view
$('#create_form').submit(function(event){
    var csrftoken = jQuery('[name=csrfmiddlewaretoken]').val();
    event.stopPropagation();
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: createApiUrl,
      csrfmiddlewaretoken: csrftoken,
      data: $(this).serializeArray(),
      success: function(data){
        $('.menu').hide(0, function () {
            $('.menu__content').hide();
        });
        $('.alert').show();
        $('.alert').alert();
        table.draw();
        setTimeout(function() { $(".alert").alert('close') }, 3000);
        
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        // console.log(XMLHttpRequest);
        // alert('some error ' + String(errorThrown) + String(textStatus) + String(XMLHttpRequest.responseText));
      }
    });
});

$('.filter-form').submit(function (event) {
    event.stopPropagation();
    event.preventDefault();
    $.ajax({
        'url': filterApiUrl,
        'type': 'post',
        'contentType': 'json',
        'data': $(this).serializeArray(),
        'success': function (result, status, xhr) {
            table.clear();
            table.rows.add(result);
            table.draw();
        },
    });
});

$('.custom-select').select2({
    width: '100%',
    theme: 'bootstrap4'
});

// handlers for date inputs (workaround to keep html5 datepicker and input placeholder)
$('.date-control').on('focus', function () {
    this.type = 'date';
});

$('.date-control').on('blur', function () {
    this.type = 'text';
});
