//event listners
document.querySelector("#blackHole").addEventListener("click", this.GainMass);
document.querySelector("#gainMass").addEventListener("click", this.GainMass);
document.querySelector("#asteroid").addEventListener("click", roidClick);
document.querySelector("#b1").addEventListener("click", gainB1);
document.querySelector("#b1").addEventListener("click", passiveGainB1);
if(!localStorage.getItem('massAmount')){
  localStorage.setItem('massAmount' , 0)
}

///QOL variables 
let display = document.querySelector(".gravity").innerHTML


// Blackhole Object

let blackhole = {}
//properties of blackhole
blackhole.mass = 0;
blackhole.border = 0.1;

//methods for blackhole

function GainMass() {
   display = Number(localStorage.getItem('massAmount'));
   blackhole.mass += 1;
    localStorage.setItem('massAmount', blackhole.mass);
    blackHoleBorderIncrease(1);
    randomObject();
    buttonAppear();
  }
  
  // This function increases the black hole border by num /10
  function blackHoleBorderIncrease(num) {
    blackHoleBorder += num / 10;
    document.querySelector(
      ".gravity"
    ).style.border = `${blackHoleBorder}rem solid black`;
  }

//button constructor
function MakeButton (unlockValue,gainRate){
  //properties of all future buttons
this.unlockValue = unlockValue
this.gainRate = gainRate


  //methods buttons activate
  
  // Function to hide or unhide ANY element passed into it as an argument.
  
  function toggleHidden(element) {
     document.querySelector(`${element}`).classList.toggle("hidden");
  }


}
//buttons numbers subject to change
let button1 = new MakeButton(10,1)
let button2 = new MakeButton(100,10)
let button3 = new MakeButton(1000,100)
let button4 = new MakeButton(10000,1000)
let button5 = new MakeButton(100000,10000)
let button6 = new MakeButton(1000000,100000)
let button7 = new MakeButton(10000000,100000)
let button8 = new MakeButton(100000000,1000000)
let button9 = new MakeButton(1000000000,10000000)
let button10 = new MakeButton(10000000000,10000000)


//Asteroid Object and possible future objects
function MakeRandomObjects() {

  //properties of Random Objects



  //methods of Random Objects

  // Function to give a random chance on click for an object to appear on the viewport
  function randomObject() {
      // randomise a number between 1 and 1000
    let randomChance = Math.floor(Math.random() * 1000);
    if (randomChance >= 1 && randomChance <= 50) {
      // 5% chance or 1 in 20 clicks to spawn a new asteroid.
     
      spawnAsteroid();
    }
  }
  // Spawn a randomly sized asteroid at a random place on the viewport.
  
  function spawnAsteroid() {
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

// Function to control the behaviour of the object and blackhole when the asteroid is clicked on.
  function roidClick() {
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




}
