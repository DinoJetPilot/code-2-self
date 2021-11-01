
const password = prompt("Please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        // console.log("Valid password entry!");
        alert("Valid password entry!");
    } else {
        alert("Password cannot have space!");
    }
} else {
    alert("Password not long enough! Must be 6 or more characters.");
}
// Password cannot include space

