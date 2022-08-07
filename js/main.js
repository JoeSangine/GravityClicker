//event listners

// I moved down the event listeners. It's better to keep functions on top and listeners on the bottom due to how JS runs

// I turned these off because there are no functions with those names.
// document.querySelector('#b1').addEventListener('click', gainB1);
// document.querySelector('#b1').addEventListener('click', passiveGainB1);

if (!localStorage.getItem("massAmount")) {
  localStorage.setItem("massAmount", 0);
}

///QOL variables
let display = document.querySelector(".gravity").innerHTML;
let randomObject = null;
let sizeRand = 0;
let xRand = 0;
let yRand = 0;

// Blackhole Object
//properties of blackhole

// Converted to class

class BlackHole {
  constructor(mass, border) {
    this.mass = mass;
    this.border = border;
  }

  //methods for blackhole

  // I changed a bit the variables names and methods to work better with the class

  gainMass() {
    blackHole.mass++;
    localStorage.setItem("massAmount", blackHole.mass);
    display = localStorage.getItem("massAmount"); // this does nothing and I don't know why. Must be something with the variable display.
    blackHole.borderIncrease(1);

    // I copied this line from the asteroid click to make the number appear. Can be optimized
    document.querySelector(".gravity").innerHTML = blackHole.mass;

    // randomObject();

    // I declared the randomObject variable outside so that I can call it from other classes
    randomObject = new MakeRandomObjects();
    // here I call the function to generate a random object (my suggestion would be renaming it to "init")
    randomObject.randomObject();

    // turned this off because I can't find this function or maybe I removed it?
    // buttonAppear();
  }

  // This function increases the black hole border by num /10
  borderIncrease(num) {
    this.border += num / 10;
    document.querySelector(
      ".gravity"
    ).style.border = `${this.border}rem solid black`;
  }
}

//button constructor
class MakeButton {
  constructor(unlockValue, gainRate) {
    //properties of all future buttons
    this.unlockValue = unlockValue;
    this.gainRate = gainRate;
  }
}

//methods buttons activate
// Function to hide or unhide ANY element passed into it as an argument.
// I put this outside so that it can work with all the objects. There are different ways to optimize this.
function toggleHidden(element) {
  document.querySelector(`${element}`).classList.toggle("hidden");
}
//buttons numbers subject to change
let button1 = new MakeButton(10, 1);
let button2 = new MakeButton(100, 10);
let button3 = new MakeButton(1000, 100);
let button4 = new MakeButton(10000, 1000);
let button5 = new MakeButton(100000, 10000);
let button6 = new MakeButton(1000000, 100000);
let button7 = new MakeButton(10000000, 100000);
let button8 = new MakeButton(100000000, 1000000);
let button9 = new MakeButton(1000000000, 10000000);
let button10 = new MakeButton(10000000000, 10000000);

//Asteroid Object and possible future objects
//Converted this as well
class MakeRandomObjects {
  constructor() {
    this.asteroid = document
      .querySelector("#asteroid")
      .addEventListener("click", this.objClick);
    this.moon = document
      .querySelector("#moon")
      .addEventListener("click", this.objClick);
    this.objHeight = 0;
    this.objGain = 0;
  }
  //properties of Random Objects

  //methods of Random Objects
  // Function to give a random chance on click for an object to appear on the viewport
  randomObject() {
    // randomise a number between 1 and 1000
    let randomChance = Math.floor(Math.random() * 1000);
    if (randomChance >= 1 && randomChance <= 50) {
      // 5% chance or 1 in 20 clicks to spawn a new asteroid.

      this.spawnObject("asteroid");
    } else if (randomChance >= 51 && randomChance <= 75) {
      this.spawnObject("moon");
    }
  }
  // Spawn a randomly sized asteroid at a random place on the viewport.

  spawnObject(obj) {
    // Randomise the x/y position for the object

    let randomCall = this.setRand();

    document.getElementById(`${obj}`).style = this.setPosition(
      randomCall[0],
      randomCall[1],
      randomCall[2]
    );
    // remove the "hidden" class from the asteroid, or add it back on if you're not paying attention!

    toggleHidden(`#${obj}`);
  }

  setRand() {
    xRand =
      Math.ceil(Math.random() * 50) * (Math.round(Math.random()) ? 1 : -1);
    yRand =
      Math.ceil(Math.random() * 50) * (Math.round(Math.random()) ? 1 : -1);
    // Randomise the size of the asteroid between 50 and 100 pixels.

    sizeRand = Math.ceil(Math.random() * 50) + 50;
    // Update the asteroid's position.
    return [sizeRand, yRand, xRand];
  }

  setPosition(sizeRand, yRand, xRand) {
    return `height: ${sizeRand}px; margin-top: ${yRand}vh; margin-left: ${xRand}vw`;
  }

  // Function to control the behaviour of the object and blackhole when the asteroid is clicked on.
  objClick() {
    // first define the current size of the asteroid as a string
    this.objHeight = document.getElementById(this.id).style.height;
    // Then trim the "px" from the end to make it a string number
    this.objGain = this.objHeight.substring(0, this.objHeight.length - 2);
    // convert the string to a number then add it to mass.
    blackHole.mass += Number(this.objGain);
    //  update black hole size
    document.querySelector(".gravity").innerHTML = blackHole.mass;
    blackHole.mass += 1; // was 0.1, now 1 to be consistent
    document.querySelector(
      ".gravity"
    ).style.border = `${blackHole.border}rem solid black`;
    // call a random roll for objects as a result of the click
    randomObject.randomObject();
    // hide the asteroid again
    toggleHidden(`#${this.id}`);
  }
}

let blackHole = new BlackHole(0, 0.1);

document
  .getElementById("blackHole")
  .addEventListener("click", blackHole.gainMass);
document
  .getElementById("gainMass")
  .addEventListener("click", blackHole.gainMass);
