const email_form = document.querySelector('#email-form');
const email_pattern = new RegExp('/^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/');
const error_message = document.querySelector('#error-message');

email_form.addEventListener('submit', function (event) {
    // Prevent submission of form
    event.preventDefault();

    // Get email element and error message element
    var email = document.querySelector('#email');
    var email_address = email.value;

    // If empty, return an error message and set outline color to red.
    if (email_address == "" || email_address == null) {
        error_message.innerHTML = 'Please enter an email address.';
        email.style.outlineColor = 'red';
    }
    // If invalid, return an error message and set outline color to red.
    else if (email_pattern.test(email_address)) {
        error_message.innerHTML = 'Please enter a valid email address.';
        email.style.outlineColor = 'red';
    }
    // Else if no error then submit form.
    else {
        email_form.submit();
    }
})

// Remove previous error messages on input keyup.
email_form.addEventListener('keyup', function (event) {
    error_message.innerHTML = "";
    email.style.outlineColor = 'revert';
})