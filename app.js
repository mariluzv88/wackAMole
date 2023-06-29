// variable for current tile
let score = 0
let harryTile;
let voldiTile;
// variable loss false
youLost = false
let game = document.querySelector('.gameBoard')
let barti = document.querySelector('barti')
let bella = document.querySelector('bella')
let peta = document.querySelector('peta')
let harri = document.querySelector('harri')
let tunnels = document.querySelectorAll('.tunnel')
let ron = document.querySelector('ron')
let her = document.querySelector('her')
let scores = document.querySelector('.score')
let cursor = document.querySelector('.wand')
let row = document.querySelector('.rowContainer')
let start = document.querySelector('.startGame') 
// let gameOver = document.querySelector('gameOver')
// window.addEventListener("mousemove",(flick) => {
//     // console.log(flick)
//     cursor.style.top = flick.pageY + "px"
//     cursor.style.left = flick.pageX + "px"
// })

// window onload function
window.onload = ()=>{
    window.addEventListener("mousemove",(flick) => {
        // console.log(flick)
        cursor.style.top = flick.pageY + "px"
        cursor.style.left = flick.pageX + "px"
    })
    
    // alert(`Start Game`)
   
    start.style.display = "block"
    over = document.querySelector('.gameOver')
    over.style.display = "none"
}
// window.onload = () => {
    // const begin = () =>{
    //  randomTunnel()
    //  cycleTunnel()
    // }
    // begin()
//     randomTunnel()
//     cycleTunnel()
    
// }
// console.log(startGame)

// game.addEventListener("click",(selectWizard) =>{
//     score.innerText = ++score
//      console.log(selectWizard.target)
// })
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
    //  console.log(runnels)
    //  console.log( Math.floor(Math.random()* 11))
            if(num == 5 || num == 6){
        runnels.classList.add('barti')
         runnels.addEventListener('click', crucio)
     }else if(num == 7 || num == 8){
        runnels.classList.add('peta')
        runnels.addEventListener('click', crucio)
     }else if(num == 9 || num == 10){
        runnels.classList.add('bella')
        runnels.addEventListener('click', crucio)
    }else if(num == 0 || num == 1){
        runnels.classList.add('harri')
        runnels.addEventListener('click', lose)
     }else if(num == 2 || num == 3){
        
        runnels.classList.add('her')
        runnels.addEventListener('click', lose)
     }else if (num == 4 || num == 5){
        runnels.classList.add('ron')
        runnels.addEventListener('click', lose)
     } else{
        return
     }

    
   // game init function
   console.log()
     
}

const clearTunnel = ()=>{
   tunnels.forEach(tunnel =>{
    tunnel.classList.remove('barti')
   })
   tunnels.forEach(tunnel =>{
    tunnel.classList.remove('bella')
   })
   tunnels.forEach(tunnel =>{
    tunnel.classList.remove('peta')
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
const begin = () =>{
    randomTunnel()
    cycleTunnel()
   }
const keepGoing = () =>{
   
    randomTunnel()
    cycleTunnel()
   }
   

 function crucio(e){
    score +=10
    scores.textContent =(`Score: ${score}`)
    console.log(e)
   
 }
 function lose(e){
     scores.textContent =(` Player 1 Score:${score}`)
     row.innerHTML = alert(`Game Over`)
      over = document.querySelector('.gameOver')
     over.style.display = "block"
     start.style.display = "none"
     if(lose){
        return
    }
    
     
    
    
    console.log(e)
   
 }
  
//  function (e){
    
//    let lose = document.querySelector('.gameBoard')
//    lose.classList.toggle('gameOver')
// //    clearInterval(randomTunnel,11000)
//  }

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
