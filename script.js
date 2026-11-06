const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");
const signupButton = document.getElementById("signupButton");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        message.textContent = "Please complete both fields.";
        return;
    }

    message.style.color = "#22d3ee";
    message.textContent =
        "The login design works! Authentication is not connected yet.";
});

signupButton.addEventListener("click", function () {
    message.style.color = "#c4b5fd";
    message.textContent =
        "The registration page will be added in the next step.";
});
