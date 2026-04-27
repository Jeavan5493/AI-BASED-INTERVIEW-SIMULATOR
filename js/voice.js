let recognition;

function startVoice() {
  recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";

  recognition.onresult = function (event) {
    let transcript = event.results[0][0].transcript;
    document.getElementById("answer").value += transcript;
  };

  recognition.start();
}