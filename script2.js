const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let playerMove;
const computerScore = document.getElementById('computer-score');
const playerScore = document.getElementById('player-score');
const message = document.getElementById('message');
const move = document.getElementById('move');
const reset = document.getElementById('reset');
let clickable = true;
let rounds = 0;
let button = document.querySelectorAll('button');
let roundCount = document.getElementById('round-number');

//Get player move from button clicks
button.forEach((btn)=>{
    btn.addEventListener('click', fullGame)
});


/*rock.onclick = () => {
    if (clickable){
    playerMove = 'rock';
    fullGame();
    }
}

paper.onclick = () => {
    if (clickable){
    playerMove = 'paper';
    fullGame();
    }
}

scissors.onclick = () => {
    if (clickable){
    playerMove = 'scissors';
    fullGame(); 
    }
}*/

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
    message.style.color = '#C9F8F6';
    message.style.fontSize = '25px';
    let playerPoint = 0;
    let computerPoint = 0;
    let rounds = 1;

    if (playerMove === computerMove){
        message.innerHTML = `Tie game. You both chose ${playerMove}`;
        rounds++;
    } else if (playerMove === 'rock' && computerMove === 'scissors'){
        message.innerHTML = `Rock beats scissors - you win!`;
        playerPoint++;
        rounds++;
    } else if (playerMove === 'rock' && computerMove === 'paper'){
        message.innerHTML = `Rock loses to paper - computer wins!`;
        computerPoint++;
        rounds++;
    } else if (playerMove === 'paper' && computerMove === 'scissors'){
        message.innerHTML = `Paper loses to scissors - computer wins!`;
        computerPoint++;
        rounds++;
    } else if (playerMove === 'paper' && computerMove === 'rock'){
        message.innerHTML = `Paper beats rock - you win!`;
        playerPoint++;
        rounds++;
    } else if (playerMove === 'scissors' && computerMove === 'paper'){
        message.innerHTML = `Scissors beats paper - you win!`;
        playerPoint++;
        rounds++;
    } else if (playerMove === 'scissors' && computerMove === 'rock'){
        message.innerHTML = `Scissors loses to rock - computer wins!`;
        computerPoint++;
        rounds++;
    } else {
        message.innerHTML = 'take a break';
    }
};



function fullGame(){
    do {
        let computerMove = computerPlay();
        gameRound(playerMove, computerMove);
        playerScore.innerHTML = `Player: ${playerPoint}`;
        computerScore.innerHMTL = `Computer: ${computerPoint}`;
        
    } while (rounds < 5)
    };