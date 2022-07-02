//global variables
let mass = 0;
let blackHoleBorder = 0.1;
let buttonAmount = 0;

//event listners 
document.querySelector("#gainMass").addEventListener("click", gainOne);
document.querySelector("#asteroid").addEventListener("click", roidClick);
document.querySelector("#gainMass").addEventListener("click", buttonAppear);
document.querySelector("#b1").addEventListener("click", gainB1);

function gainOne() {
  mass += 1;
  document.querySelector("#gravity").innerHTML = mass;

  blackHoleBorder += 0.1;
  document.querySelector(
    "#gravity"
  ).style.border = `${blackHoleBorder}rem solid black`;

  randomObject();
}
S
function roidClick() {
  // Function to control the behaviour of the object and blackhole when the asteroid is clicked on.

  // first define the current size of the asteroid as a string
  roidHeight = document.querySelector("#asteroid").style.height;
  // Then trim the "px" from the end to make it a string number
  roidGain = roidHeight.substring(0, roidHeight.length - 2);
  // convert the string to a number then add it to mass.
  mass += Number(roidGain);
  //  update black hole size
  document.querySelector("#gravity").innerHTML = mass;
  blackHoleBorder += 0.1;
  document.querySelector(
    "#gravity"
  ).style.border = `${blackHoleBorder}rem solid black`;
  // call a random roll for objects as a result of the click
  randomObject();
  // hide the asteroid again
  toggleHidden("#asteroid");
}

function randomObject() {
  // Function to give a random chance on click for an object to appear on the viewport

  // randomise a number between 1 and 1000
  let randomChance = Math.floor(Math.random() * 1000);

  if (randomChance >= 1 && randomChance <= 50) {
    // 5% chance or 1 in 20 clicks to spawn a new asteroid.
    spawnAsteroid();
  }
}

function spawnAsteroid() {
  // Spawn a randomly sized asteroid at a random place on the viewport.

  // Randomise the x/y position for the asteroid
  let xRand =
    Math.ceil(Math.random() * 50) * (Math.round(Math.random()) ? 1 : -1);
  let yRand =
    Math.ceil(Math.random() * 50) * (Math.round(Math.random()) ? 1 : -1);

  // Randomise the size of the asteroid between 50 and 100 pixels.
  let sizeRand = Math.ceil(Math.random() * 50) + 50;

  // remove the "hidden" class from the asteroid and update it's position.
  document.querySelector(
    "#asteroid"
  ).style = `height: ${sizeRand}px; margin-top: ${yRand}vh; margin-left: ${xRand}vw`;
  toggleHidden("#asteroid");
}

function toggleHidden(element) {
  // Function to hide or unhide ANY element passed into it as an argument.
  document.querySelector(`${element}`).classList.toggle("hidden");
}

function buttonAppear() {
  if (mass >= 10 && mass <= 100) {
    document.querySelector("#b1").style.visibility = "visible";
  } else if (mass >= 1000 && mass <= 10000) {
    document.querySelector("#b2").style.visibility = "visible";
  } else if (mass >= 10000 && mass <= 100000) {
    document.querySelector("#b2").style.visibility = "visible";
  } else if (mass >= 100000 && mass <= 1000000) {
    document.querySelector("#b3").style.visibility = "visible";
  } else if (mass >= 1000000 && mass <= 10000000) {
    document.querySelector("#b4").style.visibility = "visible";
  } else if (mass >= 10000000 && mass <= 100000000) {
    document.querySelector("#b5").style.visibility = "visible";
  } else if (mass >= 100000000 && mass <= 1000000000) {
    document.querySelector("#b6").style.visibility = "visible";
  } else if (mass >= 1000000000 && mass <= 10000000000) {
    document.querySelector("#b7").style.visibility = "visible";
  } else if (mass >= 10000000000 && mass <= 100000000000) {
    document.querySelector("#b8").style.visibility = "visible";
  } else if (mass >= 100000000000 && mass <= 1000000000000) {
    document.querySelector("#b9").style.visibility = "visible";
  } else if (mass >= 1000000000000 && mass <= 10000000000000) {
    document.querySelector("#b10").style.visibility = "visible";
  } else if (mass >= 10000000000000 && mass <= 100000000000000) {
    document.querySelector("#b11").style.visibility = "visible";
  } else if (mass >= 100000000000000 && mass <= 1000000000000000) {
    document.querySelector("#b12").style.visibility = "visible";
  }
}
