// Datatables

$( document ).ready(function() {

    setTimeout(function () {

        $('#example').DataTable({
            responsive: true
        });

        $('#example2').DataTable({
            scrollY:        '292px',
            scrollCollapse: true,
            paging:         false,
            "searching": false,
            "info": false
        });

    }, 2000);

});