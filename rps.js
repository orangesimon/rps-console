let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch(num) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
    return "";
}

function getHumanChoice() {
    let select = prompt("Make your selection: rock, paper, or scissors?");
    selection = select.toLowerCase();
    if (!((selection == "rock") || (selection == "paper") || (selection == "scissors")))
    {
        alert("Selection must be spelled rock, paper, or scissors.");
        return;
    }
    
    return selection;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("You tied! ");
    }
    
}