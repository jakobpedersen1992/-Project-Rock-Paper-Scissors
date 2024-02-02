let computerPick;
let userChoiceLower;



function playerSelection () {
    let userChoice = prompt("Rock, Paper or Scissor");
    userChoiceLower = userChoice.toLowerCase();

    if (userChoiceLower ==="rock" || userChoiceLower ==="paper" || userChoiceLower ==="scissor") {
        console.log(userChoiceLower);
        return userChoiceLower;
    } else {    
        alert("you have to choose!")
    }
}



const weapons = ["rock", "paper", "scissors"];

function getComputerChoice(){
    computerPick = weapons[Math.floor(Math.random() * weapons.length)];

    if (computerPick === "rock") {
        console.log("rock");
        return computerPick;
    } else if (computerPick === "paper") {
        console.log("paper");
        return computerPick;
    } else if (computerPick === "scissors") {
        console.log("scissor"); 
        return computerPick;
    }
}


let playerScore = 0;
let computerScore = 0;

function playRound() {
    playerSelection()
    getComputerChoice()

    if (userChoiceLower == computerPick){
        console.log("Tie!");
    } if (userChoiceLower == "rock" && computerPick =="scissors" ||
          userChoiceLower == "paper" && computerPick =="rock" ||
          userChoiceLower == "scissors" && computerPick =="paper" 
    ){
        playerScore++; 
        console.log("you win");
    } else if (userChoiceLower == "rock" && computerPick =="paper" ||
        userChoiceLower == "paper" && computerPick =="scissors" ||
        userChoiceLower == "scissors" && computerPick =="rock" 
    ){
        computerScore++;
        console.log("you loose");
    }
}


function playGame() {
    do {
        playRound();
        console.log(`playerscore = ${playerScore} computerscore = ${computerScore}`)
    }
    while (playerScore < 5 && computerScore < 5){      
    }
    if (computerScore ==  5){
        console.log("computer wins the game")
    } else if (playerScore == 5){
        console.log("you win the game!")
    }
}