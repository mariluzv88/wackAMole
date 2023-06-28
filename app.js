// variable for current tile
let harryTile;
let voldiTile;
let score = 0
// variable loss false
youLost = false
let game = document.querySelector('.gameBoard')
let voldi = document.querySelector(".voldemort")
// window onload function
window.onload = () => {
    gameInIt()
}

// game init function
    // set grid for loop < num of tiles
    // call mole divs from dom
    // event listener click is true select
    // call game board from dom append child

// set interval || settimeout  mole 1 millisec
// set interval || settimeout  decoy 2 millisec
// 
gameInIt = () => {
    
   for(i = 0; i<=11;i++ ){
    let tunnel = document.querySelectorAll('.tunnel')
       tunnel.id = i.toString 
    }
    setInterval(unhide,1000) 
}
// randon tile function
      

    // math.random * num of tiles
    // return as string for class id

const randomTunnel = ()=>{
     let num = Math.floor(Math.random()* 11)+1
     return num.toString()
}       





const unhide = ()=>{
    
  
}   
// mole location function
    //  if condition gameover return

    // clear previous moles if condition innerHMTL 
     //  if voldemort isclicked harry display none
    // score ++

    // variable random num function
    // if conditional for mole/decoy occupying the same tile/num return
   
    // tile location append mole
// 

// decoy function
    //  if condition gameover return

    // if condition innerHTMl

    //  if harry isclicked voldemort display none
    // score ++

    // variable random num function
  

// select function
    //  if condition gameover return
    // if conditional this assigned to cureent mole tile
    // score +=
    // call score from dom innertext score to string updating score
    // else decoy update game over
    // loss true


    // ----------------------stretch goals-------------------------
    // multilple rounds / increased speed double points
    // pop up menu for game start / gameover/ new round/do you want to continue
    // 2 player high score counter
    // sound on wack /game over
    // keyframe on wack /gameover
