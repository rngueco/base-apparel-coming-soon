var email_form = document.querySelector('#email-form');
const email_pattern = new RegExp('/^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/');

email_form.addEventListener('submit', function (event) {
    // Prevent submission of form
    event.preventDefault();

    // Get email element and error message element
    var email = document.querySelector('#email');
    var email_address = email.value;
    var error_message = document.querySelector('#error-message');

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
    else {
        email_form.submit();
    }
})

email_form.addEventListener('keyup', function (event) {
    var error_message = document.querySelector('#error-message');

    error_message.innerHTML = "";
    email.style.outlineColor = 'revert';
})