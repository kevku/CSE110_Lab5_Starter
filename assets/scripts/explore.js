// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById("voice-select");
  const synth = window.speechSynthesis;
  let voices = [];
  voices = synth.getVoices();
  const textBox = document.getElementById("text-to-speak");
  const talkButton = document.querySelector('#explore button');
  const voiceImage = document.querySelector('#explore img');
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener("click", (event)=>{
    const utterThis = new SpeechSynthesisUtterance(textBox.value);
    const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.onstart = function(event) {
      voiceImage.src = 'assets/images/smiling-open.png';
      voiceImage.alt = 'Smiling open face';
    };
    utterThis.onend = function(event) {
      voiceImage.src = 'assets/images/smiling.png';
      voiceImage.alt = 'Smiling face';
    };
    synth.speak(utterThis);
    
  }); 

}