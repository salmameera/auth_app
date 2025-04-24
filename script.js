function signUp(event) {
  event.preventDefault();

  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  const email = document.getElementById("signup-email").value;
  const phone = document.getElementById("signup-phone").value;

  // Get existing users
  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[username]) {
    alert("Username already exists. Please sign in.");
    window.location.href = "index.html";
  } else {
    // Save new user
    users[username] = { password, email, phone };
    localStorage.setItem("users", JSON.stringify(users));
    alert("Sign up successful! Please log in.");
    window.location.href = "index.html";
  }
}

function signIn(event) {
  event.preventDefault();

  const username = document.getElementById("signin-username").value;
  const password = document.getElementById("signin-password").value;

  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (!users[username]) {
    alert("Username doesn’t exist. Try signing up.");
    return;
  }

  if (users[username].password === password) {
    alert("Login successful!");
    window.location.href = "welcome.html";
  } else {
    alert("Incorrect password. Please try again.");
  }
}
