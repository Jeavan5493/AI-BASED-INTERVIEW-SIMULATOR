function startInterview() {
  let level = document.getElementById("level").value;
  let lang = document.getElementById("lang").value;

  localStorage.setItem("level", level);
  localStorage.setItem("lang", lang);

  location.href = "interview.html";
}

function logout() {
  localStorage.removeItem("currentUser");
  location.href = "login.html";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function loadHistory() {
  let history = Storage.getHistory();
  let div = document.getElementById("history");

  if (!div) return;

  div.innerHTML = history.map(h => `<p>Score: ${h.score}</p>`).join("");
}

loadHistory();

function saveProfile() {
  alert("Saved!");
}