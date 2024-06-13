

export function ouvirPalavra(palavra){
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "pt-BR";
recognition.start();
recognition.addEventListener("result", onSpeak);

recognition.addEventListener("end", ()=> recognition.start());


function onSpeak(event) {
    let guess = event.results[0][0].transcript;
    console.log(guess);
  }
}