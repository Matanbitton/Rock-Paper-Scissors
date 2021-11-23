const choiceArray = ["Rock","Paper","Scissors"];


 
function computerPlay(){
    let computerChose; 
    for (let i = 0; i < 5; i++) {
        computerChose = choiceArray[Math.floor(Math.random() * choiceArray.length)];
        console.log(computerChose);
    }
}


computerPlay();
