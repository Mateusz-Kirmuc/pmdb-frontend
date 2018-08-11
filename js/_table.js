/* Table script */


$(function () {
    var data = [
        {
            'name': 'ADO-01',
            'type': 'chemical',
            'group': 'toxic',
            'added_on': '2017-01-03',
            'added_by': 'User1',
            'author': 'User1',
            'number_of_samples': 1
        },
        {
            'name': 'ADO-01',
            'type': 'chemical',
            'group': 'toxic',
            'added_on': '2017-01-03',
            'added_by': 'User1',
            'author': 'User1',
            'number_of_samples': 1
        },
        {
            'name': 'ADO-01',
            'type': 'chemical',
            'group': 'toxic',
            'added_on': '2017-01-03',
            'added_by': 'User1',
            'author': 'User1',
            'number_of_samples': 2
        },
    ];

    $('.table__sheet').DataTable({
        data: data,
        columns: [
            {title: 'Name', data: 'name'},
            {title: 'Type', data: 'type'},
            {title: 'Group', data: 'group'},
            {title: 'Added on', data: 'added_on'},
            {title: 'Added by', data: 'added_by'},
            {title: 'Author', data: 'author'},
            {title: 'No. of samples', data: 'number_of_samples'},
        ],
        paging: false
    });
});