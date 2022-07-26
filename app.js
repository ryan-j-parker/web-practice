// fireplace 
const fireplace = new Audio('/assets/fireplace.mp3');
fireplace.loop = true;
const fireplaceBtn = document.getElementById('fireplace-btn');

fireplaceBtn.addEventListener('click', (e) => {
  togglePlay(fireplace, e);
});

// underwater
const underwater = new Audio('/assets/underwater-ambience.mp3');
underwater.loop = true;
const underwaterBtn = document.getElementById('underwater-btn');

underwaterBtn.addEventListener('click', (e) => {
  togglePlay(underwater, e);
});

// seagulls
const seagulls = new Audio('/assets/seagulls.mp3');
seagulls.loop = true;
const seagullsBtn = document.getElementById('seagulls-btn');

seagullsBtn.addEventListener('click', (e) => {
  togglePlay(seagulls, e);
});

// arctic wind
const arctic = new Audio('/assets/cold-arctic-wind.mp3');
arctic.loop = true;
const arcticBtn = document.getElementById('arctic-btn');

arcticBtn.addEventListener('click', (e) => {
  togglePlay(arctic, e);
});

// crickets
const crickets = new Audio('/assets/night-crickets.wav');
crickets.loop = true;
const cricketsBtn = document.getElementById('crickets-btn');

cricketsBtn.addEventListener('click', (e) => {
  togglePlay(crickets, e);
});

// rainy day
const rainy = new Audio('/assets/rain-and-thunder.mp3');
rainy.loop = true;
const rainyBtn = document.getElementById('rainy-btn');

rainyBtn.addEventListener('click', (e) => {
  togglePlay(rainy, e);
});

// swedish forest
const forest = new Audio('/assets/swedish-forest.wav');
forest.loop = true;
const forestBtn = document.getElementById('forest-btn');

forestBtn.addEventListener('click', (e) => {
  togglePlay(forest, e);
});

// rocky river
const river = new Audio('/assets/rocky-river.wav');
river.loop = true;
const riverBtn = document.getElementById('river-btn');

riverBtn.addEventListener('click', (e) => {
  togglePlay(river, e);
});

// space
const space = new Audio('/assets/space.mp3');
space.loop = true;
const spaceBtn = document.getElementById('space-btn');

spaceBtn.addEventListener('click', (e) => {
  togglePlay(space, e);
});

function togglePlay(audioObject, e) {
  if (audioObject.paused) {
    audioObject.play();
  } else {
    audioObject.pause();
    e.stopPropagation();
  }
}