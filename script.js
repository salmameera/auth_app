function signUp(event) {
  event.preventDefault();
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  // Save user data in localStorage (for demo purposes)
  localStorage.setItem("user", JSON.stringify({ username, password }));
  alert("Sign Up Successful! Please Sign In.");
  window.location.href = "index.html";
}

function signIn(event) {
  event.preventDefault();
  const username = document.getElementById("signin-username").value;
  const password = document.getElementById("signin-password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.username === username && user.password === password) {
    alert("Login successful!");
    window.location.href = "welcome.html";
  } else {
    alert("Invalid username or password!");
  }
}

