// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state


// fireplace 
const fireplace = new Audio('/assets/fireplace.mp3');
const fireplaceBtn = document.getElementById('fireplace-btn');

fireplaceBtn.addEventListener('click', (e) => {
  if (fireplace.paused) {
    fireplace.play();
  } else {
    fireplace.pause();
    e.stopPropagation();
  };
});

// underwater
const underwater = new Audio('/assets/underwater-ambience.mp3');
const underwaterBtn = document.getElementById('underwater-btn');

underwaterBtn.addEventListener('click', (e) => {
  if (underwater.paused) {
    underwater.play();
  } else {
    underwater.pause();
    e.stopPropagation();
  };
});

// seagulls
const seagulls = new Audio('/assets/seagulls.mp3');
const seagullsBtn = document.getElementById('seagulls-btn');

seagullsBtn.addEventListener('click', (e) => {
  if (seagulls.paused) {
    seagulls.play();
  } else {
    seagulls.pause();
    e.stopPropagation();
  };
});

// arctic wind
const arctic = new Audio('/assets/cold-arctic-wind.mp3');
const arcticBtn = document.getElementById('arctic-btn');

arcticBtn.addEventListener('click', (e) => {
  if (arctic.paused) {
    arctic.play();
  } else {
    arctic.pause();
    e.stopPropagation();
  };
});

// crickets
const crickets = new Audio('/assets/night-insects.mp3');
const cricketsBtn = document.getElementById('crickets-btn');

cricketsBtn.addEventListener('click', (e) => {
  if (crickets.paused) {
    crickets.play();
  } else {
    crickets.pause();
    e.stopPropagation();
  };
});

// rainy day
const rainy = new Audio('/assets/rainy-day.wav');
const rainyBtn = document.getElementById('rainy-btn');

rainyBtn.addEventListener('click', (e) => {
  if (rainy.paused) {
    rainy.play();
  } else {
    rainy.pause();
    e.stopPropagation();
  };
});

// swedish forest
const forest = new Audio('/assets/swedish-forest.wav');
const forestBtn = document.getElementById('forest-btn');

forestBtn.addEventListener('click', (e) => {
  if (forest.paused) {
    forest.play();
  } else {
    forest.pause();
    e.stopPropagation();
  };
});

// rocky river
const river = new Audio('/assets/rocky-river.wav');
const riverBtn = document.getElementById('river-btn');

riverBtn.addEventListener('click', (e) => {
  if (river.paused) {
    river.play();
  } else {
    river.pause();
    e.stopPropagation();
  };
});

// space
const space = new Audio('/assets/space.mp3');
const spaceBtn = document.getElementById('space-btn');

spaceBtn.addEventListener('click', (e) => {
  if (space.paused) {
    space.play();
  } else {
    space.pause();
    e.stopPropagation();
  };
});