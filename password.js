// ... your password prompt and validation logic ...

// Wrap the content in a function
function protectContent() {
    // Check if the user has already entered the correct password
    if (!localStorage.getItem('accessGranted')) {
        const password = prompt('Bitte Passwort eingeben:');
        if (password === 'notebooklm-workshop-25') {
            localStorage.setItem('accessGranted', true);
        } else {
            document.body.innerHTML = 'Falsches Passwort';
        }
    }
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', protectContent);
