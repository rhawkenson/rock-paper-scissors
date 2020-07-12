let buttons = document.querySelectorAll('.move-button');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
const computerScore = document.getElementById('computer-score');
const playerScore = document.getElementById('player-score');


 //Gets the player's choice
rock.onclick = () => {
    playerSelection = 'rock';
    computerPlay();
    gameRound(playerSelection, computerSelection); 
}

paper.onclick = () => {
    playerSelection = 'paper';
    computerPlay();
    gameRound(playerSelection, computerSelection); 
}

scissors.onclick = () => {
    playerSelection = 'scissors';
    computerPlay();
    gameRound(playerSelection, computerSelection); 
}

 //Generates random computer choice    
    const computerSelection = computerPlay();
    function computerPlay(){
        let choice = Math.floor(Math.random()*3)+1;
        if (choice === 1){
            return 'paper';
        } else if (choice === 2){
            return 'rock';
        } else {
            return 'scissors';
        }
    }

    let playerPoint = 0;
    let computerPoint = 0;

//Determines winner of the round 
    function gameRound(playerSelection, computerSelection){
        if (playerSelection === computerSelection){
        } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')){
            computerPoint+=1;
        } else if ((playerSelection === 'paper') && (computerSelection === 'rock')){
            playerPoint+=1;
        } else if ((playerSelection === 'rock') && (computerSelection === 'paper')){
            computerPoint+=1;
        } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')){
            playerPoint+=1;
        } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')){
            playerPoint+=1;
        } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')){
            computerPoint+=1;
        } else {
            return 'ERROR! TRY AGAIN';
        } 
    }

    function game() {
        let rounds = 1;

        do {
            console.log(`Round: ${rounds}`);
            console.log(`Player Pick: ${playerSelection}`);
            console.log(`Computer Pick: ${computerSelection}`);
            
            gameRound(playerSelection, computerSelection);
            rounds++;
            
            console.log(`Rolling score: Player ${playerPoint} v ${computerPoint} Computer`)
            console.log('')

        } while (rounds < 6 && computerPoint !== 3 && playerPoint !== 3);

            if (playerPoint === computerPoint) {
                console.log(`TIE! A close game after ${rounds - 1} rounds!`);
            
            } else if (playerPoint > computerPoint) {
                console.log(`PLAYER WINS after ${rounds - 1} rounds. 
                Final score: PLAYER ${playerPoint} v ${computerPoint} COMPUTER`);
            
            } else if (computerPoint > playerPoint) {
                console.log(`COMPUTER WINS after ${rounds - 1} rounds. 
                Final score: Player ${playerPoint} v ${computerPoint} Computer`);
            }
        };

    console.log(game());