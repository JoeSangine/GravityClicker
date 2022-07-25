//global variables

let mass = 0;
let blackHoleBorder = 0.1;
let buttonAmount = 0;
const bignumber = 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
//event listners
document.querySelector("#blackHole").addEventListener("click", gainMass);
document.querySelector("#gainMass").addEventListener("click", gainMass);
document.querySelector("#asteroid").addEventListener("click", roidClick);
document.querySelector("#b1").addEventListener("click", gainB1);
document.querySelector("#b1").addEventListener("click", passiveGainB1);





//functions


function gainMass() {
  // This function controls all effects triggered by pushing the gain mass button.
  mass += 1;
  document.querySelector(".gravity").innerHTML = mass;
  blackHoleBorderIncrease(1);
  randomObject();
  buttonAppear(); // *** Fix *** Button appear now gets called on gainMass
}

function gainB1() {
  // This function controls all effects triggered by pushing the B1 button.
  buttonAmount += 1;
  document.querySelector(".gravity").innerHTML = mass;
  document.querySelector("#b1").innerHTML = buttonAmount;
  blackHoleBorderIncrease(1);
  randomObject();
  buttonAppear(); // *** Fix *** Button appear now gets called on gainB1
}

function blackHoleBorderIncrease(num) {
  // This function increases the black hole border by num /10
  blackHoleBorder += num / 10;
  document.querySelector(
    ".gravity"
  ).style.border = `${blackHoleBorder}rem solid black`;
}

function roidClick() {
  // Function to control the behaviour of the object and blackhole when the asteroid is clicked on.

  // first define the current size of the asteroid as a string
  roidHeight = document.querySelector("#asteroid").style.height;
  // Then trim the "px" from the end to make it a string number
  roidGain = roidHeight.substring(0, roidHeight.length - 2);
  // convert the string to a number then add it to mass.
  mass += Number(roidGain);
  //  update black hole size
  document.querySelector(".gravity").innerHTML = mass;
  blackHoleBorder += 0.1;
  document.querySelector(
    ".gravity"
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

  // Update the asteroid's position.
  document.querySelector(
    "#asteroid"
  ).style = `height: ${sizeRand}px; margin-top: ${yRand}vh; margin-left: ${xRand}vw`;

  // remove the "hidden" class from the asteroid, or add it back on if you're not paying attention!
  toggleHidden("#asteroid");
}

function toggleHidden(element) {
  // Function to hide or unhide ANY element passed into it as an argument.
  document.querySelector(`${element}`).classList.toggle("hidden");
}

function buttonAppear() {
  if (mass >= 10 && mass <= 1000) {
    document.querySelector("#b1").classList.remove("hidden");
  } else if (mass >= 1000 && mass <= 10000) {
    document.querySelector("#b2").classList.remove("hidden");
  } else if (mass >= 10000 && mass <= 100000) {
    document.querySelector("#b2").classList.remove("hidden");
  } else if (mass >= 100000 && mass <= 1000000) {
    document.querySelector("#b3").classList.remove("hidden");
  } else if (mass >= 1000000 && mass <= 10000000) {
    document.querySelector("#b4").classList.remove("hidden");
  } else if (mass >= 10000000 && mass <= 100000000) {
    document.querySelector("#b5").classList.remove("hidden");
  } else if (mass >= 100000000 && mass <= 1000000000) {
    document.querySelector("#b6").classList.remove("hidden");
  } else if (mass >= 1000000000 && mass <= 10000000000) {
    document.querySelector("#b7").classList.remove("hidden");
  } else if (mass >= 10000000000 && mass <= 100000000000) {
    document.querySelector("#b8").classList.remove("hidden");
  } else if (mass >= 100000000000 && mass <= 1000000000000) {
    document.querySelector("#b9").classList.remove("hidden");
  } else if (mass >= 1000000000000 && mass <= 10000000000000) {
    document.querySelector("#b10").classList.remove("hidden");
  } else if (mass >= 10000000000000 && mass <= 100000000000000) {
    document.querySelector("#b11").classList.remove("hidden");
  } else if (mass >= 100000000000000 && mass <= 1000000000000000) {
    document.querySelector("#b12").classList.remove("hidden");
  }
}

// need to set #b1 to gain mass by increment of one per second.
//  
function passiveGainB1(){
 moon = (mass + 1) * buttonAmount;
 
 
  while (buttonAmount >= 1){
    moon++;
  }
  document.querySelector(".gravity").innerHTML = moon;
 
}
