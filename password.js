// ... your password prompt and validation logic ...

// Wrap the content in a function
function protectContent() {
    // Check if the user has already entered the correct password
    if (!localStorage.getItem('accessGranted')) {
        const password = prompt('Please enter password:');
        if (password === 'notebooklm-workshop-25' || password === 'notebook-26') {
            localStorage.setItem('accessGranted', true);
        } else {
            document.body.innerHTML = 'Wrong Password. Access Denied.';
        }
    }
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', protectContent);
