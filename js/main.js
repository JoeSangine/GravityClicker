// create a button that appears after gravity = 100 make that button have a function which gains 1 total in gravity every second repeat process for gravity = 1000 so on and so forth
// 


let mass = 0



document.querySelector('#gainMass').addEventListener('click',gainOne)
document.querySelector('#gainMass').addEventListener('click',buttonAppear)
function gainOne(){
   mass = mass + 1
    document.querySelector('#gravity').innerHTML = mass

}
function buttonAppear(){
if (mass >= 10 && mass <= 15) {
    document.querySelector('#b1').style.visibility = "visible";
   
    
}
// for some reason when entering b2 here with else if it does not work as the b1 does...
else if (mass >= 15){
    document.querySelector('#b2').style.visibility = "visible";
}
else{ document.querySelector('#b1','#b2').style.visibility = "hidden"; }
}
// manually adding buttonse with if/else statements will become tedious if game is to have a lot. need to find a way to automate.
// buttons still need to be assigned function to grow by the second. possibly a loop, need to find a way to incrimint by the second not microseconds.