function signup() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  Storage.saveUser({ email, password });
  alert("Signup success");
}

function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = Storage.getUser(email);

  if (user && user.password === password) {
    Storage.setCurrentUser(user);
    location.href = "dashboard.html";
  } else {
    alert("Invalid");
  }
}