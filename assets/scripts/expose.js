// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  const hornSelector = document.getElementById("horn-select");
  const image = document.querySelector('#expose img');
  const audio = document.querySelector('#expose audio');
  const playButton = document.querySelector('#expose button');
  const volumeRange = document.getElementById("volume");
  const volumeImage = document.querySelector('#volume-controls img');
  var selectedHorn = '';
  const jsConfetti = new JSConfetti();
  hornSelector.addEventListener("input", (event)=>{
    selectedHorn = hornSelector.value;
    image.src = `assets/images/${selectedHorn}.svg`;
    audio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  volumeRange.addEventListener("input", (event)=> {
    let volumeNumber = parseFloat(volumeRange.value);
    audio.volume = volumeNumber/100;
    if (audio.volume === 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
      volumeImage.alt = 'Volume level 0';
    }
    else if (audio.volume > 0 && audio.volume < (33/100)) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
      volumeImage.alt = 'Volume level 1';
    }
    else if (audio.volume >= (33/100) && audio.volume < (67/100)) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
      volumeImage.alt = 'Volume level 2';
    }
    else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
      volumeImage.alt = 'Volume level 3';
    }
  });

  playButton.addEventListener("click", (event)=>{
    if (selectedHorn === 'party-horn') {
      jsConfetti.addConfetti({
        
      });
    }
    audio.play();
  });
}