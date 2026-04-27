const Storage = {
  saveUser(user) {
    localStorage.setItem(user.email, JSON.stringify(user));
    localStorage.setItem("currentUser", JSON.stringify(user));
  },

  getUser(email) {
    return JSON.parse(localStorage.getItem(email));
  },

  setCurrentUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
  },

  saveHistory(data) {
    let h = JSON.parse(localStorage.getItem("history") || "[]");
    h.push(data);
    localStorage.setItem("history", JSON.stringify(h));
  },

  getHistory() {
    return JSON.parse(localStorage.getItem("history") || "[]");
  }
};