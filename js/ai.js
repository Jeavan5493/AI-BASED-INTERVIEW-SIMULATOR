function evaluateAnswer(answer) {
  let score = 0;

  // Length scoring
  if (answer.length > 50) score += 20;
  if (answer.length > 100) score += 20;

  // Keywords
  const keywords = ["data", "structure", "function", "api", "performance"];

  keywords.forEach(k => {
    if (answer.toLowerCase().includes(k)) {
      score += 10;
    }
  });

  return score;
}