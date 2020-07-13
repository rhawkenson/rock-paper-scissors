const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let playerMove;
const computerMove = computerPlay();
const computerScore = document.getElementById('computer-score');
const playerScore = document.getElementById('player-score');
const message = document.getElementById('message');
const move = document.getElementById('move');
const reset = getElementById('reset');

//Get player move from button clicks
rock.onclick = () => {
    playerMove = 'rock';
    computerPlay();
    gameRound(playerMove, computerMove);
}

paper.onclick = () => {
    playerMove = 'paper';
    computerPlay();
    gameRound(playerMove, computerMove);
}

scissors.onclick = () => {
    playerMove = 'scissors';
    computerPlay();
    gameRound(playerMove, computerMove);
}

reset.onclick = () => {
    message.innerHTML = 'steven sucks';
    message.style.color = '#C9F8F6';
    message.style.fontSize = '25px';
    
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
    let rounds = 0;

    if (playerMove === computerMove){
        message.innerHTML = `Tie game. You both chose ${playerMove}`;

    } else if (playerMove === 'rock' && computerMove === 'scissors'){
        message.innerHTML = `Rock beats scissors - you win!`;
        playerPoint++;
        rounds++;
    } else if (playerMove === 'rock' && computerMove === 'paper'){
        message.innerHTML = `Rock loses to paper - computer wins!`;
        computerPoint++;
        rounds++;
    }else if (playerMove === 'paper' && computerMove === 'scissors'){
        message.innerHTML = `Paper loses to scissors - computer wins!`;
        computerPoint++;
        rounds++;
    }else if (playerMove === 'paper' && computerMove === 'rock'){
        message.innerHTML = `Paper beats rock - you win!`;
        playerPoint++;
        rounds++;
    }else if (playerMove === 'scissors' && computerMove === 'paper'){
        message.innerHTML = `Scissors beats paper - you win!`;
        playerPoint++;
        rounds++;
    }else if (playerMove === 'scissors' && computerMove === 'rock'){
        message.innerHTML = `Scissors loses to rock - computer wins!`;
        computerPoint++;
        rounds++;
    }else {
        message.innerHTML = 'take a break';
    }
};
