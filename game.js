const choiceArray = ["Rock","Paper","Scissors"];
// counters to count the number of wins each had
let playerCnt = 0;
let computerCnt = 0;


 //this function returns a random choice from the choice array for the computer to "choose"
function computerPlay(){
    let computerChose; 
    computerChose = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return computerChose;  
}
// this function should return who won the game (returns a tie if it's a tie) also counts overall score with the counters.
function playRound(playerSelection, computerSelection){
    // this checks for valid input and makes the player input title case 
    // so comparing to the choice array + printing to the console the actual value becomes easier
    if (playerSelection === "") {
        console.log("Error: No selection identfied")
        return;
    }
        let temp = playerSelection.toLowerCase();
        let firstChar = temp[0].toUpperCase();
        playerSelection = firstChar + temp.substring(1,temp.length);

    if (playerSelection === computerSelection) {
        computerCnt++;
        playerCnt++;
        return `You both chose ${playerSelection}\nit's a Tie!`;
        
    } else {
        if ((playerSelection === choiceArray[0] && computerSelection === choiceArray[2]) || 
        (playerSelection === choiceArray[1] && computerSelection === choiceArray[0]) || 
        (playerSelection === choiceArray[2] && computerSelection === choiceArray[1])) {
            playerCnt++;
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
        }
        else {
            computerCnt++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerChoice = prompt("Please choose: Rock, Paper, Or Scissors?")
        console.log(playRound(playerChoice,computerPlay()));
    }
    if (computerCnt != 0 && playerCnt != 0) {
        if (computerCnt > playerCnt) {
            console.log("The Computer Won! AI is going to RULE THE WORLD!!!")
        } else {
            console.log("You Won! Humans are better than computers obviously.")
        }
    }
}
    

game();
