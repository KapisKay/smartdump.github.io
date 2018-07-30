$(document).ready(function () {
    
    var getBin = $('#getBin');
    getBin.validate({
        rules: {
            Name: {
                required: true,
                minlength: 5

            },

            ServiceType: {
                required: true

            },

            business:{
                required: true
            },

            location:{
                required: true
            },

            Contact:{
                required:true,
                minlength: 10
            },

            Email:{
                required: true
            }

        },
        messages: {
            Name: {
                required:'Full name required',
                minlength:'Name must be at least 5 characters'

            },

            ServiceType: {
                required:'Please enter service required'

            },

            business: {
                required: 'Business type required'
            },

            location: {
                required: 'Your location is required'
            },

            Contact:{
                required: 'Please enter your number',
                minlength: 'Your must be at least 10 digits'
            },
            Email: {
                required: 'E-mail required'
            }


        },
        submitHandler: submitGetBin
    });

    if (getBin.validate ==true) {
         alert('thank yoy');
    }

});