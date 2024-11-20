function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch(num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
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



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("You tied! ");
            return;
        }
        switch(humanChoice) {
            case "rock":
                switch(computerChoice) {
                    case "scissors":
                        console.log("You won! Rock beats scissors.");
                        humanScore++;
                        return;
                    case "paper":
                        console.log("You lost! Paper beats rock.");
                        computerScore++;
                        return;
                }
            case "paper":
                switch(computerChoice) {
                    case "scissors":
                        console.log("You lost! Scissors beats paper.");
                        computerScore++;
                        return;
                    case "rock":
                        console.log("You won! Paper beats rock.");
                        humanScore++;
                        return;
                }
            case "scissors":
                switch(computerChoice) {
                    case "rock":
                        console.log("You lost! Rock beats scissors.");
                        computerScore++;
                        return;
                    case "paper":
                        console.log("You won! Scissors beats paper.");
                        humanScore++;
                        return;
                }
        }
    }

    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();    
        playRound(humanSelection, computerSelection);
        console.log("Computer: " + computerScore + "\n You: " + humanScore);
    }
}


