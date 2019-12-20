let playerCount = 0;
let computerCount = 0;
let roundCount = 0;
let totalResult = 0;

function computerPlay(){
    let x = Math.floor(Math.random()*3);
    let computerChoice = ""
    switch (x){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;

    }
    
    return computerChoice;
}

function playerPlay(){
    let y = document.getElementById("inputText").value;
    let playerChoice = y.toLowerCase();
    
    //Test for cheating
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors"){
        playerChoice = "Cheater";
    }
    
    return playerChoice;
}

function playRound(){
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    
    let result = "Draw";
  
    
    if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper") || (playerSelection == "Cheater")) {

        result = "Computer wins!! " + computerSelection + " beats " + playerSelection + "!!!";
        ++computerCount;
        ++totalResult;

    } else if  ((computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "rock")) {

        result = "You win!! " + playerSelection + " beats " + computerSelection + "!!!";
        ++playerCount;
        --totalResult;

    } else {
        result = "Draw";
    }
    document.getElementById("computerChoice").innerHTML = computerSelection;
    document.getElementById("playerChoice").innerHTML = playerSelection;
    document.getElementById("roundResult").innerHTML = result;
  
}

function game(){
    
    if (roundCount < 5){
        playRound();
        document.getElementById("rndCount").innerHTML = roundCount+1;
        document.getElementById("compCount").innerHTML = computerCount;
        document.getElementById("playCount").innerHTML = playerCount;
    }    
    ++roundCount;
    if (roundCount==4){

    
        if (totalResult < 0){
            document.getElementById("totalResult").innerHTML = "YOU WIN!!!"
        } else if (totalResult > 0){
            document.getElementById("totalResult").innerHTML = "Computer WIN!!!"
        } else {
            document.getElementById("totalResult").innerHTML = "Draw"
        }
    }

}

function restart(){
    location.reload();
}

