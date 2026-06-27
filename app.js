function signup() {
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    if (!username || !password) {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Signup successful!");
}
function signin() {
    const username = document.getElementById("signinUsername").value;
    const password = document.getElementById("signinPassword").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "welcome.html";
    } else {
        alert("Invalid username or password");
    }
}
const user = localStorage.getItem("loggedInUser");

if (!user) {
    window.location.href = "index.html";
}

document.getElementById("welcomeMessage").innerText =
    `Welcome, ${user}!`;

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "signin..html";
}