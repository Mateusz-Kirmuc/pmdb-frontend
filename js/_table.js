/* Table script */


$(function () {
    var JSON = {
        data: [
            {
                'id': 1,
                'name': 'ADO-01',
                'type': 'chemical',
                'group': 'toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1
            },
            {
                'id': 2,
                'name': 'ADO-02',
                'type': 'chemical',
                'group': 'toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1
            },
            {
                'id': 3,
                'name': 'ADO-03',
                'type': 'chemical',
                'group': 'toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1
            },
        ],
        columns: [
            {data: 'id'},
            {title: 'Name', data: 'name'},
            {title: 'Type', data: 'type'},
            {title: 'Group', data: 'group'},
            {title: 'Added on', data: 'added_on'},
            {title: 'Added by', data: 'added_by'},
            {title: 'Author', data: 'author'},
            {title: 'Number of samples', data: 'number_of_samples'}
        ]
    };

    var table = $('.table__sheet').DataTable({
        data: JSON.data,
        columns: JSON.columns,
        columnDefs: [
            {
                "targets": 0,
                render: function (data) {
                    return '<input class="table__select-one ' + data + '" type="checkbox">';
                },
                title: '<input type="checkbox" class="table__select-all">',
                orderable: false
            },
            {
                className: 'table__cell',
                targets: '_all'
            }
        ],
        order: [],
        paging: false,
        info: false,
        dom: 't',
        createdRow: function (row) {
            $(row).addClass('table__row');
        },
        initComplete: function () {
            $('.table__thead > tr').addClass('table__row table__row--header');
        }
    });

    $(".table__search").keyup(function () {
        table.search(this.value).draw();
    });
});