let newRound = false 
let roundOver = false
let isClicked = false
let timer = 30
let score = 0
let tunnels = document.querySelectorAll('.tunnel')
let game = document.querySelector('.gameBoard')
let scores = document.querySelector('.score')
let cursor = document.querySelector('.wand')
let row = document.querySelector('.rowContainer')
let start = document.querySelector('.startGame') 
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
   
    start.style.display = "block"
    over = document.querySelector('.gameOver')
    over.style.display = "none"
}
// ^^^^^^^^^^^^^^^^^^^Pre-requisite^^^^^^^^^^^^^^^^^^^


const gameStart = ()=>{
round1Start()
// player1Play()
// player2Turn()
// player2Play()
// round2Start()
// player1Play()
// player2Turn()
// winCondition()
}

const round1Start = () =>{
alert("round 1 is starting!")
timerSet()
let time = setInterval(timerSet, 1000)
if(timer == 0 ){
    clearTimeout(time)
}
gameCondition()
playState()
player1Play()

}
console.log(round1Start)
const player1Play = () =>{
alert("player 1 GO!")
}
const player2Turn = () =>{

}
const player2Play = () =>{

}
const round2Start = () =>{

}
const winCondition = () =>{
    
}

// ----------timer stuff--------------

const playState = ()=>{
    let move = setInterval(gameCondition,1000)
    if (timer ===  0){
        clearTimeout(move)
    }
}

 
function timerSet(){
   
    countDown.innerHTML = (`:${timer}`)
    timer-- 
   
    
    
}


const gameCondition = ()=>{
    clearTunnel()
    let runnels = tunnels[Math.floor(Math.random()* 11)]
    let num = Math.floor(Math.random()* 11)
    
   
   //  console.log(runnels)
    // console.log( num)
           if(num === 7 || num === 6 ){
               youLost = false      
       runnels.classList.add('barti')
        runnels.addEventListener('click', crucio,  )
        
    }else if( num === 8   ){
       youLost = false
       runnels.classList.add('peta')
       runnels.addEventListener('click', avada, )
      
    }else if(num === 9 || num === 10 ){
      youLost = false
       runnels.classList.add('bella')
       runnels.addEventListener('click', crucio,   )
      
   }else if(num === 0 || num === 1   ){
       youLost = false
       runnels.classList.add('harri')
       runnels.addEventListener('click', leviosahh,)
      
    }else if(num === 2 || num === 3 ){
       youLost = false
       runnels.classList.add('her')
       runnels.addEventListener('click', leviosahh, )
      
    }else if (num === 4 || num === 5 ){
       youLost = false
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

function crucio(e){
    
            
    score +=10
    p1score.textContent =(`Player 1 Score: ${score}`)
    console.log(e)


}
function avada(e){

    
    score +=30
    p1score.textContent =(`Player 1 Score: ${score}`)
    console.log(e)


}
const leviosahh = () =>{
// youLost = true
score -=10
// clearInterval(stop)

// cycleTunnel(lose) 
p1score.textContent =(` Player 1 Score:${score}`)
//  row.innerHTML = alert(`Game Over`)

// start.style.display = "none"
//  over.style.display = "block"
}