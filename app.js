// variable for current tile

let harryTile;
let voldiTile;
let score = 0
// variable loss false
youLost = false
let game = document.querySelector('.gameBoard')
let voldi = document.querySelector('voldi')
let harri = document.querySelector('harri')
let tunnels = document.querySelectorAll('.tunnel')
let ron = document.querySelector('ron')
let her = document.querySelector('her')
// window onload function
window.onload = () => {
    randomTunnel()
    cycleTunnel()
    
    
}

// game init function


// set interval || settimeout  mole 1 millisec
// set interval || settimeout  decoy 2 millisec
// 
// gameInIt = () => {
    

// randon tile function
      

    // math.random * num of tiles
    // return as string for class id

   
const randomTunnel = ()=>{
    clearTunnel()
     let runnels = tunnels[Math.floor(Math.random()* 11)]
     let num = Math.floor(Math.random()* 11)
     console.log(runnels)
     console.log( Math.floor(Math.random()* 11))
            if(num > 5){
        runnels.classList.add('voldi')
     }else if(num == 0 || num == 1){
        runnels.classList.add('harri')
      
     }else if(num == 2 || num == 3){
        
        runnels.classList.add('her')
      
     }else if (num == 4 || num == 5){
        runnels.classList.add('ron')
     } 
     
}
const clearTunnel = ()=>{
   tunnels.forEach(tunnel =>{
    tunnel.classList.remove('voldi')
   })
   tunnels.forEach(tunnel =>{
    tunnel.classList.remove('harri')
   })
   tunnels.forEach(tunnel =>{
    tunnel.classList.remove('her')
   })
   tunnels.forEach(tunnel =>{
    tunnel.classList.remove('ron')
   })
    

    
}


const cycleTunnel = ()=>{
    setInterval(randomTunnel,1000)
   
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
