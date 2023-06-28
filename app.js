// variable for current tile
let curentTile
let isHidden = true
// variable for decoy tile
let decoyTile
// variable score
let score = 0
// variable loss false
youLost = false
let game = document.querySelector('.gameBoard')
let voldi = document.querySelector(".voldemort")
// window onload function
window.onload = () => {
    gameInIt()
}

gameInIt = () => {
    
   for(i = 0; i<=11;i++ ){
    let tunnel = document.querySelectorAll('.tunnel')
       tunnel.id = i.toString 
    }
    setInterval(unhide,1000) 
}
const randomTunnel = ()=>{
     let num = Math.floor(Math.random()* 11)+1
     return num.toString()
}  


const unhide = ()=>{
    
   randomTunnel().append(voldi)
}

    // game init function
        // set grid for loop < num of tiles
        // call mole divs from dom
        // event listener click is true select
        // call game board from dom append child
    
    // set interval || settimeout  mole 1 millisec
    // set interval || settimeout  decoy 2 millisec
// 

// randon tile function
      

    // math.random * num of tiles
    // return as string for class id


// mole location function
    //  if condition gameover return

    // clear previous moles if condition innerHMTL 
    // create element img for mole
    // src link

    // variable random num function
    // if conditional for mole/decoy occupying the same tile/num return
    // tile location call dom idnum
    // tile location append mole
// 

// decoy function
    //  if condition gameover return

    // if condition innerHTMl

    // create image in dom
    // src link

    // variable random num function
     // if conditional for mole/decoy occupying the same tile/num return
    // tile location call dom idnum
    // tile location append decoy
// 

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
