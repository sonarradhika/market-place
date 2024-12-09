// Script - errorMessages.js
// This script defines functions for adding and removing error messages.

// This function adds the error message.
// It takes two arguments: the form element ID and the message.
function addErrorMessage(id, msg) {
    'use strict';

    // Get the form element reference:
    var elem = document.getElementById(id);

    // Define the new span's ID value:
    var newId = id + 'Error';

    // Check for the existence of the span:
    var span = document.getElementById(newId);
    if (span) {
        span.firstChild.value = msg; // Update
    } else { // Create new.

        // Create the span:
        span = document.createElement('span');
        span.id = newId;
        span.className = 'error';
        span.appendChild(document.createTextNode(msg));

        // Add the span to the parent:
        elem.parentNode.appendChild(span);
        elem.previousSibling.className = 'error';

    } // End of main IF-ELSE.

    checkFieldValidity(id,'ADD');
} // End of addErrorMessage() function.

// This function removes the error message.
// It takes one argument: the form element ID.
function removeErrorMessage(id) {
    'use strict';

    // Get a reference to the span:
    var span = document.getElementById(id + 'Error');
    if (span) {

        // Remove the class from the label:
        span.previousSibling.previousSibling.className = null;

        // Remove the span:
        span.parentNode.removeChild(span);

    } // End of IF.
    checkFieldValidity(id,'REMOVE');
} // End of removeErrorMessage() function.
function checkFieldValidity(id, action) {
    'use strict';

    // Get the form element reference
    var elem = document.getElementById(id);

    // Check if the element exists
    if (!elem) {
        console.error('Element not found:', id);
        return; // Exit early if the element doesn't exist
    }

    // Get the label (previous sibling or another method depending on structure)
    var label = elem.previousElementSibling; // More reliable than previousSibling

    // If the label exists, add the 'valid' class to it
    if (label && label.tagName === 'LABEL') {
        if (action=='REMOVE') {
            label.classList.add('valid');  // Mark the label as valid (green)
            elem.classList.add('valid');   
            label.style.color = 'green';
            label.innerHTML = label.innerHTML.replace('✓', '') + ' ✓'; 
        } else {
            label.classList.remove('valid');  // Remove the valid class if the field is empty
            elem.classList.remove('valid');   // Remove the 'valid' class from the input
            label.style.color = 'red';
            label.innerHTML = label.innerHTML.replace('✓', '');  // Remove the green check mark
            elem.classList.remove('valid');
        }
    } else {
        console.warn('Label not found for', id); // Warn if the label is not found
    }
}