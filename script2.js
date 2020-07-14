const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let playerMove;
const computerScore = document.getElementById('computer-score');
const playerScore = document.getElementById('player-score');
const tieScore = document.getElementById('tie-score');
const message = document.getElementById('message');
const move = document.getElementById('move');
const reset = document.getElementById('reset');
let button = document.querySelectorAll('button');
let roundCount = document.getElementById('round-number');
let playerPoint = 0;
let computerPoint = 0;
let tiePoint = 0;
let rounds = 0;
let gameOver = document.getElementById('game-over');
let clickable = true;

//Get player move from button clicks
rock.onclick = () => {
    if(clickable){
    playerMove = 'rock';
    fullGame();
    }
}

paper.onclick = () => {
    if(clickable){
    playerMove = 'paper';
    fullGame();
    }
}

scissors.onclick = () => {
    if(clickable){
    playerMove = 'scissors';
    fullGame(); 
    }
}

reset.onclick = () => {
    message.innerHTML = '';
    startOver();
}

const startOver = () =>{
    reset.onclick = window.location.reload();
}

//Get computer move by random chance
function computerPlay(){
    let choice = Math.floor(Math.random()*3)+1;
    if (choice === 1){
        return 'paper';
    } else if (choice === 2){
        return 'rock';
    } else {
        return 'scissors';
    }
};

//play the game 
function gameRound(playerMove, computerMove){
    message.style.color = '#A5D332';
    message.style.fontSize = '25px';
    move.innerHTML = `Computer chose: ${computerMove}`;

    if (playerMove === computerMove){
        message.innerHTML = `Tie game. You both chose ${playerMove}`;
        tiePoint++;
        ++rounds;
    } else if (playerMove === 'rock' && computerMove === 'scissors'){
        message.innerHTML = `Rock beats scissors - you win!`;
        playerPoint++;
        ++rounds;
    } else if (playerMove === 'rock' && computerMove === 'paper'){
        message.innerHTML = `Rock loses to paper - computer wins!`;
        computerPoint++;
        ++rounds;
    } else if (playerMove === 'paper' && computerMove === 'scissors'){
        message.innerHTML = `Paper loses to scissors - computer wins!`;
        computerPoint++;
        ++rounds;
    } else if (playerMove === 'paper' && computerMove === 'rock'){
        message.innerHTML = `Paper beats rock - you win!`;
        playerPoint++;
        ++rounds;
    } else if (playerMove === 'scissors' && computerMove === 'paper'){
        message.innerHTML = `Scissors beats paper - you win!`;
        playerPoint++;
        ++rounds;
    } else if (playerMove === 'scissors' && computerMove === 'rock'){
        message.innerHTML = `Scissors loses to rock - computer wins!`;
        computerPoint++;
        ++rounds;
    } else {
        message.innerHTML = 'take a break';
    } 
    
    playerScore.innerHTML = `Player: ${playerPoint}`;
    computerScore.innerHTML = `Computer: ${computerPoint}`;
    tieScore.innerHTML = `Ties: ${tiePoint}`;
    roundCount.innerHTML = `Round ${rounds} of 5`;
};




function fullGame(){
    let computerMove = computerPlay();
    gameRound(playerMove, computerMove);
    gameOver.style.color = '#A5D332';

    if (rounds >= 5 && playerPoint > computerPoint){
        gameOver.innerHTML = 'GAME OVER: YOU WIN!';
        clickable = false;
    } else if (rounds >= 5 && playerPoint < computerPoint){
        gameOver.innerHTML = 'GAME OVER: COMPUTER WINS!';
        clickable = false;
    } else if (rounds >= 5 && playerPoint === computerPoint){
        gameOver.innerHTML = 'GAME OVER: YOU TIED!';
        clickable = false;
    } else {
        gameOver.innerHTML = '';
    }
};
