const email_form = document.querySelector('#email-form');
const error_message = document.querySelector('#error-message');
const email = document.querySelector('#email');

// Add an input invalid listener to email input field. Return 
// appropriate error message when input is invalid.
email.addEventListener('invalid', function (event) {
    returnErrorMessage(event);
})

// On blur, check for input validity. This calls the input invalid
// event listener.
email.addEventListener('blur', function (event) {
    email.checkValidity();
})

// Remove previous error messages on input focus.
email.addEventListener('focus', function (event) {
    error_message.innerHTML = "";
    email.classList.remove('invalid', 'invalid-message', 'empty-message');
})

// Function to return appropriate error message based on type or error.
function returnErrorMessage(event) {
    var email_address = email.value;

    if (email_address == "" || email_address == null) empty(event);
    else invalid(event);
}

function invalid (event) {
    email.classList.add('invalid', 'invalid-message');
}

function empty (event) {
    email.classList.add('invalid', 'empty-message');
}

// In case user removes the `required` attribute on input element
email_form.addEventListener('submit', function (event) {
    event.preventDefault();
    var email_address = email.value;

    // Test if input field is empty, return appropriate error message.
    if (email_address == "" || email_address == null) returnErrorMessage(event);
    else email_form.submit();
})