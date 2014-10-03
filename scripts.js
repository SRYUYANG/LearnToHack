/**
 * scripts.js
 */

$(document).ready(function()
{

	// form validation
	$('#hi').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        submitButtons: '#lth-reg-button',
        fields: {
            firstName: {
                message: 'First name is not valid',
                validators: {
                    notEmpty: {
                        message: 'First name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'You name seems too long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'First name can only consist of letters'
                    }
                }
            },
            lastName: {
                message: 'Last name is not valid',
                validators: {
                    notEmpty: {
                        message: 'Last name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'You name seems too long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'Last name can only consist of letters'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            }
        }
    });
});
