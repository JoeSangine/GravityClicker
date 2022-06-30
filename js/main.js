// create a button that appears after gravity = 100 make that button have a function which gains 1 total in gravity every second repeat process for gravity = 1000 so on and so forth
//

let mass = 0;
let blackHoleBorder = 0.1;

document.querySelector("#gainMass").addEventListener("click", gainOne);
document.querySelector("#asteroid").addEventListener("click", roidClick);

function gainOne() {
  mass += 1;
  document.querySelector("#gravity").innerHTML = mass;

  blackHoleBorder += 0.1;
  document.querySelector(
    "#gravity"
  ).style.border = `${blackHoleBorder}rem solid black`;

  randomObject();
}

function roidClick() {
  roidHeight = document.querySelector("#asteroid").style.height;
  roidGain = roidHeight.substring(0, roidHeight.length - 2);
  mass += Number(roidGain);
  document.querySelector("#gravity").innerHTML = mass;
  blackHoleBorder += 0.1;
  document.querySelector(
    "#gravity"
  ).style.border = `${blackHoleBorder}rem solid black`;

  randomObject();
  toggleHidden("#asteroid");
}

function randomObject() {
  let randomChance = Math.floor(Math.random() * 1000);

  if (randomChance >= 1 && randomChance <= 50) {
    // 5% chance or 1 in 20 clicks.
    spawnAsteroid();
  }
}

function spawnAsteroid() {
  // Randomise the size from -50% to 50% of viewport
  // Use the random values above to choose an x/y position for the asteroid
  let xRand =
    Math.ceil(Math.random() * 50) * (Math.round(Math.random()) ? 1 : -1);
  let yRand =
    Math.ceil(Math.random() * 50) * (Math.round(Math.random()) ? 1 : -1);

  let sizeRand = Math.ceil(Math.random() * 50) + 50;

  // remove the "hidden" class from the asteroid and update it's position.

  document.querySelector(
    "#asteroid"
  ).style = `height: ${sizeRand}px; margin-top: ${yRand}vh; margin-left: ${xRand}vw`;
  toggleHidden("#asteroid");
}

function toggleHidden(element) {
  document.querySelector(`${element}`).classList.toggle("hidden");
}
