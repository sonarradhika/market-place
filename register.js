// Script - register.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.

function validateForm(e) {
	'use strict';

	// Get the event object:
	if (typeof e == 'undefined') e = window.event;

	// Get form references:
	var firstName = U.$('firstName');
	var lastName = U.$('lastName');
	var email = U.$('email');
	var phone = U.$('phone');
	var interest = U.$('interest');
	var message = U.$('message');
	const wordlimit = 20;


	// Flag variable:
	var error = false;

	// Validate the first name:
	if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
		removeErrorMessage('firstName');
		
	} else {
		addErrorMessage('firstName', 'Please enter your valid first name having characters only');
		error = true;
	}

	// Validate the last name:
	if (/^[A-Z \.\-']{2,20}$/i.test(lastName.value)) {
		removeErrorMessage('lastName');
		
	} else {
		addErrorMessage('lastName', 'Please enter your valid last name having characters only');
		error = true;
	}

	// Validate the email address:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		removeErrorMessage('email');
		
	} else {
		addErrorMessage('email', 'Please enter your valid email address.');
		error = true;
	}

	// Validate the phone number:
	if (/\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}/.test(phone.value)) {
		removeErrorMessage('phone');
		
	} else {
		addErrorMessage('phone', 'Please enter your phone number.');
		error = true;
	}

	// Validate the interest field:
	// Validate the interest field:
	if (interest.value.trim() != '') {
		removeErrorMessage('interest');
		
	} else {
		addErrorMessage('interest', 'Please select an interest.');
		error = true;
	}
	// Split the message value into words and count them
	const wordCount = message.value.trim().length;

	if (message.value.trim() != '' && wordCount <= wordlimit) {
		removeErrorMessage('message');
		
	} else if (message.value.trim() == '') {
		addErrorMessage('message', 'Please enter a message.');
		error = true;
	} else if (wordCount > wordlimit) {
		addErrorMessage('message', `Please enter no more than ${wordlimit} words. You have entered ${wordCount} words.`);
		error = true;
	}

	// If an error occurred, prevent the default behavior:
	if (error) {

		// Prevent the form's submission:
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		return false;

	}

} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	'use strict';

	// Get a reference to the submit button:
	var submit = U.$('submit');

	// Toggle its disabled property:
	if (U.$('terms').checked) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}

} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function () {
	'use strict';

	// The validateForm() function handles the form:
	U.addEvent(U.$('theForm'), 'submit', validateForm);

	// Disable the submit button to start:
	U.$('submit').disabled = true;

	// Watch for changes on the terms checkbox:
	U.addEvent(U.$('terms'), 'change', toggleSubmit);

	// Enbable tooltips on the phone number:
	U.enableTooltips('phone');
	U.enableTooltips('message');


};