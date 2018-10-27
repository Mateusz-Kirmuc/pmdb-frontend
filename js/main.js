let sidebar_script = require('./_sidebar.js');
let side_menus_script = require('./_side-menus.js');
let table_script = require('./_table.js');
let menu_show_hide_columns = require('./_menu-show-hide-columns.js');

$(function () {
    sidebar_script();
    table_script();
    side_menus_script();
    menu_show_hide_columns();
});
