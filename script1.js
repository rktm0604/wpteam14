document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("emailOrUsername").value;
    const password = document.getElementById("password").value;

    // Dummy login check (replace with real authentication if needed)
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to the dashboard page
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
