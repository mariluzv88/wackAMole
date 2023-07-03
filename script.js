let newRound = false 
let roundOver = false
let isClicked = false
let timer ;
let score = 0
let timeUp = false
let tunnels = document.querySelectorAll('.tunnel')
let game = document.querySelector('.gameBoard')
// let scores = document.querySelector('.score')
let player1 = document.querySelector('.p1score')
let player2 = document.querySelector('.p2score')
let cursor = document.querySelector('.wand')
let row = document.querySelector('.rowContainer')
let start = document.querySelector('.startMenu') 
let over = document.querySelector('.gameOver')
let p1Win = document.querySelector('.p1Wins')
let p2Win = document.querySelector('.p2Wins')
let vWin = document.querySelector('.tied')
let main = document.querySelector('.mainContainer')
let countDown = document.querySelector('.time')
let barti = document.querySelector('barti')
let bella = document.querySelector('bella')
let peta = document.querySelector('peta')
let harri = document.querySelector('harri')
let ron = document.querySelector('ron')
let her = document.querySelector('her')

window.onload = ()=>{
    window.addEventListener("mousemove",(flick) => {
        // console.log(flick)
        cursor.style.top = flick.pageY + "px"
        cursor.style.left = flick.pageX + "px"
    })
    
    // alert(`Start Game`)
   main.style.display = "none"
    start.style.display = "block"
    over = document.querySelector('.gameOver')
    over.style.display = "none"
}
// ^^^^^^^^^^^^^^^^^^^Pre-requisite^^^^^^^^^^^^^^^^^^^


const gameStart = ()=>{
    start.style.display = "none"
    main.style.display = "flex"
      setTimeout(function(){
   
        round1Start()
     
    },1000)
// player1Play()

// setTimeout(function(){
    
    
//     player2Turn()
//     player2Play()
//     },30000)
// setTimeout(function(){
//     round2Start()
//     player1R2()
//     },60000)
//   setTimeout(function(){
   
//       player2R2()
//     },75000)
//   setTimeout(function(){
   
      
//       winConditon()
//     },90000)
}

const tryAgain = () =>{
    window.addEventListener("mousemove",(flick) => {
        // console.log(flick)
        cursor.style.top = flick.pageY + "px"
        cursor.style.left = flick.pageX + "px"
    })
    
    // alert(`Start Game`)
   main.style.display = "none"
    start.style.display = "block"
    
    over.style.display = "none" 
    p1Win.style.display = "none" 
    p2Win.style.display = "none" 
     vWin.style.display = "none" 
     score = 0

}
const round1Start = () =>{
alert("round 1 is starting!")
player1Play()
// timerSet()
// timeStop()
// let playStateP1 =setInterval(function(){
//     gameConditionP1()
//   },1000)
// //    setTimeout(function(){
// //   clearInterval(playState)
// //   clearInterval(timerSet)
// //   alert("do you want to continue?")
// //    },30000)
  
//    let timerSet = setInterval(function(){
//        countDown.innerHTML = (`:${timer}`)
//        timer-- 
//        if(timer === -1){         
//           clearInterval(playStateP1)
//           clearInterval(timerSet)
//           player2Turn()
//           player2Play()
//               }
  
//    },1000)

// gameCondition()
// playState()


}

const player1Play = () =>{
alert("player 1 GO!")

timer = 30
player1Turn()
}
const player1Turn = ()=>{
    let player1R1 =setInterval(function(){
        player1.innerHTML = (`${score}`)
        gameCondition()
      },1000)
      let timerSet = setInterval(function(){
        countDown.innerHTML = (`: ${timer}`)
        timer-- 
        if(timer === 0){         
           clearInterval(player1R1)
           clearInterval(timerSet)
           player2Turn()
          
               }
   
    },1000)
   
}
const player2Turn = () =>{
    alert("player 2's turn")
    player2Play()
}
const player2Play = () =>{
    alert("player 2 GO!")
    timer = 30
    score = 0
    let player2R1 =setInterval(function(){
        player2.innerHTML = (`${score}`)
        gameCondition()
      },1000)
      let timerSet = setInterval(function(){
       
        countDown.innerHTML = (`:${timer}`)
        timer-- 
        if(timer === 0){         
           clearInterval(player2R1)
           clearInterval(timerSet)
           round2Start()
               }
   
    },1000)
}
const round2Start = () =>{
    alert('Round 2 is starting')
    alert("round 2 + speed / -time")
 let player = prompt('Do You Want To continue?')
    if(player === null || player === "" || player ==="no"){
        main.style.display = "none"
        start.style.display = "none"
         over.style.display = "block"      
        //  clearInterval(player1R1)
        //  clearInterval(player2R2)
        // clearInterval(timerSet) 
}else{
   player1Round2()
}
}
const player1Round2 = ()=>{
    alert("player 1 GO!")
    timer = 15
    score = player1.innerHTML
    let player1R2 =setInterval(function(){
        player1.innerHTML = (`${score}`)
        gameCondition()
      },500)
    //    setTimeout(function(){
    //   clearInterval(playState)
    //   clearInterval(timerSet)
    //   alert("do you want to continue?")
    //    },30000)
      
       let timerSet = setInterval(function(){
          
           countDown.innerHTML = (`:${timer}`)
           timer-- 
           if(timer === 0){         
              clearInterval(player1R2)
              clearInterval(timerSet)
              player2Round2()
                  }
      
       },1000)
}
const player2Round2 = ()=>{
    alert("player 2 GO!")
    timer = 15
    score = player2.innerHTML
    let player2R2 =setInterval(function(){
        player2.innerHTML = (`${score}`)
        gameCondition()
      },500)
    //    setTimeout(function(){
    //   clearInterval(playState)
    //   clearInterval(timerSet)
    //   alert("do you want to continue?")
    //    },30000)
      
       let timerSet = setInterval(function(){
          
           countDown.innerHTML = (`:${timer}`)
           timer-- 
           if(timer === 0){         
              clearInterval(player2R2)
              clearInterval(timerSet)
              winCondition()
                  }
      
       },1000)
}
const winCondition = () =>{
    if(player1.innerText  > player2.innerText){
        main.style.display = "none"
        start.style.display = "none"
         p1Win.style.display = "block"  
    }else if (player2.innerText > player1.innerText){
        main.style.display = "none"
        start.style.display = "none"
         p2Win.style.display = "block"  
    }else{
        main.style.display = "none"
        start.style.display = "none"
         vWin.style.display = "block"  
    }
}

// ----------timer stuff--------------


const gameCondition = ()=>{
    clearTunnel()
    let runnels = tunnels[Math.floor(Math.random()* 11)]
    let num = Math.floor(Math.random()* 11)
    
    
    //  console.log(runnels)
    // console.log( num)
    if(num === 7 || num === 6 ){
             
        runnels.classList.add('barti')
        runnels.addEventListener('click', crucio,  )
        
    }else if( num === 8   ){
       
       runnels.classList.add('peta')
       runnels.addEventListener('click', avada, )
       
    }else if(num === 9 || num === 10 ){
       
        runnels.classList.add('bella')
        runnels.addEventListener('click', crucio,   )
        
    }else if(num === 0 || num === 1   ){
        
        runnels.classList.add('harri')
        runnels.addEventListener('click', leviosahh,)
        
    }else if(num === 2 || num === 3 ){
       
        runnels.classList.add('her')
        runnels.addEventListener('click', leviosahh, )
        
    }else if (num === 4 || num === 5 ){
      
        runnels.classList.add('ron')
        runnels.addEventListener('click', leviosahh, )
        
    } 
    
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

// ------------attack actions------------

function crucio ()  {
    score+= 10
    // player1.innerText = (`Player 1 Score: ${score}`)
    console.log(e)
}
function avada  () {
    score+= 30
    // player1.innerText = (`Player 1 Score: ${score}`)
    console.log(e)
}
function leviosahh  () {
    score-= 10
    // player1.innerText = (` Player 1 Score:${score}`)
    //  row.innerHTML = alert(`Game Over`)
    
    // start.style.display = "none"
    //  over.style.display = "block"
}

// const playState = ()=>{
//     let move = setInterval(gameCondition,1000)
//     if (timer ===  0){
//         clearTimeout(move)
//     }
// }
// let playState =setInterval(function(){
//   gameCondition()
// },1000)
//  setTimeout(function(){
// clearInterval(playState)
// clearInterval(timerSet)
// alert("do you want to continue?")
//  },30000)

//  let timerSet = setInterval(function(){
//      countDown.innerHTML = (`:${timer}`)
//      timer-- 
//      if(timer === -1){         
//         clearInterval(playState)
//         clearInterval(timerSet)
//             }

//  },1000)
// function timerSet(){
   
    // console.log(timer)
    // console.log(countDown)
   
//     if(timer === -1){
//         clearTimeout(time)
//     }
// }
// let time = setInterval(timerSet, 1000,)
// function timeStop(){
    
    
//     console.log(timer)
//     console.log(countDown)
    
// }