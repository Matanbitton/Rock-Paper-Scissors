const choiceArray = ["Rock","Paper","Scissors"];

const rockArt = document.createElement("div");
rockArt.innerHTML = `<i class="fas fa-hand-rock"></i>`;
rockArt.style.cssText = `
 font-size: 70px;
 margin: 0;
 padding: 0;
 color: #2E86AB; 
`;
const paperArt = document.createElement("div");
paperArt.innerHTML = `<i class="fas fa-hand-paper"></i>`;
paperArt.style.cssText = `
 font-size: 70px;
 margin: 0;
 padding: 0;
 color: #2E86AB; 
`;
const scissorsArt = document.createElement("div");
scissorsArt.innerHTML = `<i class="fas fa-hand-scissors"></i>`
scissorsArt.style.cssText = `
 font-size: 70px;
 margin: 0;
 padding: 0;
 color: #2E86AB; 
`;

const playerScoreText = document.createElement("h1");
const computerScoreText = document.createElement("h1");
// counters to count the number of wins each had
let playerCnt = 0;
let computerCnt = 0;

playerScoreText.textContent = `Player: ${playerCnt}`;
computerScoreText.textContent = `Computer: ${computerCnt}`;

const artArray = [rockArt.innerHTML,paperArt.innerHTML,scissorsArt.innerHTML];




const playerChoiceDiv = document.createElement("div");
const computerChoiceDiv = document.createElement("div");
const choiceDiv = document.createElement("div");


let art;
function choiceArt(choice,thingToAppendTo) { 
    thingToAppendTo.innerHTML = '';  
    art = document.createElement("div");
    art.innerHTML = artArray[choice];
    art.style.cssText = `
    font-size: 70px;
    color: #2E86AB`
    thingToAppendTo.append(art);
}




let computerChose; 
 //this function returns a random choice from the choice array for the computer to "choose"
function computerPlay(){

    computerChose = Math.floor(Math.random() * choiceArray.length);
    choiceArt(computerChose,computerChoiceDiv);
    return computerChose;  
}

// this function return who won the round
function playRound(playerSelection){
    
       computerSelection = choiceArray[computerPlay()];
     
        if (playerSelection === computerSelection) {
            
            return `You both chose ${playerSelection}\nit's a Tie!`;
            
        } else {
            if ((playerSelection === choiceArray[0] && computerSelection === choiceArray[2]) || 
            (playerSelection === choiceArray[1] && computerSelection === choiceArray[0]) || 
            (playerSelection === choiceArray[2] && computerSelection === choiceArray[1])) {
                playerScoreText.textContent = `Player: ${++playerCnt}`;
                return `You Win! ${playerSelection} beats ${computerSelection}!`;
            }
            else {
                computerScoreText.textContent = `Computer: ${++computerCnt}`;
                return `You Lose! ${computerSelection} beats ${playerSelection}`;
            }
        }
}

function playAgain() {
   
    playButtonContainer.append(playAgainButton)
    playAgainButton.addEventListener("click",function(){
        resultsText.textContent = "Choose Your Weapon!"
        playerCnt = 0;
        playerScoreText.textContent = `Player: ${playerCnt}`;
        computerCnt = 0;
        computerScoreText.textContent = `Computer: ${computerCnt}`;
        playButtonContainer.removeChild(playAgainButton);
    });
   
}

function winnerDecleration() {
    if(playerCnt === 5 && computerCnt < 5){
        playAgain();
        resultsText.textContent = "YOU WIN! humans are better than computers."
    }else if (playerCnt < 5 && computerCnt === 5 ){
        playAgain();
        resultsText.textContent = "The Compuer Won! Scary.. We can't let A.I take over the world"
    }
}

    

const body = document.body;
const titleContainer = document.createElement('div');
const title = document.createElement("h1");
const underTitle = document.createElement("h5");
const visualsContainer = document.createElement('div');
const visualsPlayer = document.createElement('div');
const visualsComputer = document.createElement('div');
const buttonsContainer = document.createElement('div');
const resultsText = document.createElement("h1");
const playAgainButton = document.createElement("Button");
const playButtonContainer = document.createElement("div");
playAgainButton.textContent = "Play Again?";

title.textContent = "Rock Paper Scissors";
underTitle.textContent = "Winner is first to 5 points"
resultsText.textContent = "Choose Your Weapon!";



body.style.backgroundColor = "#565554";

choiceDiv.style.cssText = `
height: 100px;
width: 100%;
display:flex;
justify-content: space-around;
`
;
resultsText.style.cssText = `
display:flex;
justify-content: center;
color: white;
font-family:Sans-serif, Helvetica; 
text-align: center;
`;

playAgainButton.style.cssText = `
 text-align: center;
 font-size: 30px;
 margin: 50px;
 padding: 10px;
 border: 1em 1em;
 border-radius: 20px;
 color: white; 
 background-color: #2E86AB;

`
playButtonContainer.style.cssText = `
 display: flex;
 justify-content: center;
`

visualsContainer.style.cssText = `

width: 100%;
height: 300px;
border: solid #2E86AB;
margin-top: 20px;
margin-bottom: 20px;
`;

visualsPlayer.style.cssText = `
height: 100px;
width: 50%;

display:inline-block;
justify-content: space-around;

`;

visualsComputer.style.cssText = `
height: 100px;
width: 50%;
display:inline-block;


`;

computerScoreText.style.cssText = `
font-family: Sans-serif, Helvetica; 
font-size: 30px;
text-align: center;
color: white;
`;

playerScoreText.style.cssText = `
font-family: Sans-serif, Helvetica; 
font-size: 30px;
text-align: center;
color: white;
`;

buttonsContainer.style.cssText = ` 
width:50%
height: 50px;
display: flex;
justify-content: center;
gap: 100px;
`;

titleContainer.style.cssText = ` 

padding: 20px;
border: solid #2E86AB;
`;

title.style.cssText = `
display: flex;
justify-content: center;

font-family: Sans-serif, Helvetica; 
font-size: 60px;
padding: 0;
margin: 0;
color: white;
`;
underTitle.style.cssText = `
display: flex;
justify-content: center;
font-size : 20px;
font-family: Sans-serif, Helvetica; 
padding: 0;
margin: 10px;
color: white;
`;


rockArt.addEventListener("click",function(){
    if(playerCnt < 5 && computerCnt < 5) {
        resultsText.textContent= playRound("Rock");
        choiceArt(0,playerChoiceDiv);
        winnerDecleration();
} 
});
rockArt.addEventListener("mouseleave",function(){
    rockArt.style.fontSize = `70px`;
    rockArt.style.color = `#2E86AB`;
});
rockArt.addEventListener("mouseover",function(){
    rockArt.style.fontSize = `80px`;
    rockArt.style.color = `#1a91c4`;

});
paperArt.addEventListener("click",function(){
    if(playerCnt < 5 && computerCnt < 5) {
        resultsText.textContent= playRound("Paper");
        choiceArt(1,playerChoiceDiv);
        winnerDecleration();
    }
});
paperArt.addEventListener("mouseleave",function(){
    paperArt.style.fontSize = `70px`;
    paperArt.style.color = `#2E86AB`;
   
});
paperArt.addEventListener("mouseover",function(){
    paperArt.style.cssText = `
    color: #1a91c4;
    font-size: 80px;
    `
});

scissorsArt.addEventListener("click",function(){
    if(playerCnt < 5 && computerCnt < 5) {
        resultsText.textContent= playRound("Scissors");
        choiceArt(2,playerChoiceDiv); 
        winnerDecleration();
    } 
});

scissorsArt.addEventListener("mouseleave",function(){
    scissorsArt.style.fontSize = `70px`;
    scissorsArt.style.color = `#2E86AB`;
});
scissorsArt.addEventListener("mouseover",function(){
    scissorsArt.style.fontSize = `80px`;
    scissorsArt.style.color = `#1a91c4`;

} );



body.append(titleContainer);
body.append(visualsContainer);
body.append(buttonsContainer);
body.append(playButtonContainer);
titleContainer.append(title,underTitle);
buttonsContainer.append(rockArt,paperArt,scissorsArt);
// body.append(resultsText);
visualsContainer.append(visualsPlayer,visualsComputer,choiceDiv,resultsText);
choiceDiv.append(playerChoiceDiv,computerChoiceDiv);
visualsComputer.append(computerScoreText);
visualsPlayer.append(playerScoreText);
