let level = localStorage.getItem("level") || "beginner";

let questionsSet = {
  beginner: [
    "What is a variable?",
    "What is a function?",
    "What is an array?"
  ],
  intermediate: [
    "Explain stack vs queue",
    "What is API?",
    "Explain async programming"
  ],
  experienced: [
    "Design a scalable system",
    "Explain microservices architecture",
    "How does load balancing work?"
  ]
};

let questions = questionsSet[level];
let index = 0;
let score = 0;

function show() {
  document.getElementById("question").innerText = questions[index];
}

show();

function nextQuestion() {
  let ans = document.getElementById("answer").value;

  // FAKE AI SCORING
  if (ans.length > 10) score += 10;

  index++;

  if (index < questions.length) {
    show();
    document.getElementById("answer").value = "";
  }
}

function finish() {
  Storage.saveHistory({ score, date: new Date() });
  alert("Score: " + score);
  location.href = "dashboard.html";
}