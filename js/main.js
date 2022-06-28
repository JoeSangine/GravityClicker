// create a button that appears after gravity = 100 make that button have a function which gains 1 total in gravity every second repeat process for gravity = 1000 so on and so forth
// 


let gravity = 0



document.querySelector('#gainMass').addEventListener('click',gainOne)

function gainOne(){
   gravity = gravity + 1
    document.querySelector('#gravity').innerHTML = gravity

}
