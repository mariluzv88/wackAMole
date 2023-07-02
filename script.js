let newRound = false 
let roundOver = false
let isClicked = false
let timer = 30
// let score = 0
// let tunnels = document.querySelectorAll('.tunnel')
// let game = document.querySelector('.gameBoard')
// let scores = document.querySelector('.score')
// let cursor = document.querySelector('.wand')
// let row = document.querySelector('.rowContainer')
// let start = document.querySelector('.startGame') 
// let countDown = document.querySelector('.time')
// let barti = document.querySelector('barti')
// let bella = document.querySelector('bella')
// let peta = document.querySelector('peta')
// let harri = document.querySelector('harri')
// let ron = document.querySelector('ron')
// let her = document.querySelector('her')


const gameStart = ()=>{
round1Start()
player1Play()
player2Turn()
player2Play()
round2Start()
player1Play()
player2Turn()
winCondition()
}

const round1Start = () =>{
timerSet()
gameCondition()
}
const player1Play = () =>{

}
const player2Turn = () =>{

}
const player2Play = () =>{

}
const round2Start = () =>{

}
const winCondition = () =>{

}



const timerSet = () =>{
    let sec = 0
     timer = setInterval(() =>{
        timer.innerHTML = ":"+sec
        sec ++
     }, 1000 )
}

const gameCondition = ()=>{

}
