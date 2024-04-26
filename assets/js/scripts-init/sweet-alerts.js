// SweetAlerts2

$(document).ready(function() {

    $('.btn-show-swal').each(function() {
        $(this).click(function() {

            var alertType = $(this).attr('data-type');

            swal({
                title: 'Type: ' + alertType,
                text: 'Do you want to continue',
                type: alertType,
                confirmButtonText: 'Cool'
            });

        });
    });



    $('.btn-show-swal-basic').click(function() {

        Swal({
            text: 'The Internet?',
            title: 'That thing is still around?',
            type: 'question',
        });

    });

    $('.btn-show-swal-basic-2').click(function() {

        swal({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
        });

    });

    $('.btn-show-swal-basic-3').click(function() {

        swal({
            title: 'Custom animation with Animate.css',
            animation: false,
            customClass: 'animated lightSpeedIn'
        });

    });

});