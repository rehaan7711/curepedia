function handleLogin() {
  
    // Get the username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Store the username and password in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  
    // Redirect to the welcome page
    window.location.href = "welcome.html";
  }