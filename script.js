function computerPlay(){
    const elements = ["rock","paper","scissors"]
    return elements[Math.floor(Math.random()*3)]
}

let winCount=0

function playRound(playerSelection,computerSelection){
    switch(playerSelection){
        case "rock":
            if(computerSelection === "paper"){
                console.log("You Lose! Paper defeats Rock")
                winCount>0 ? winCount -= 1 : winCount=0
                break
            } 
            else if(computerSelection === "scissors"){
                console.log("You Win!, Rock defeats Scissors")
                winCount += 1
                break
            }
            else{
                return console.log("Draw")
                break
            }
        case "paper":
            if(computerSelection === "scissors"){
                console.log("You Lose! Scissors defeats paper")
                winCount>0 ? winCount -= 1 : winCount=0
                break
            } 
            else if(computerSelection === "rock"){
                console.log("You Win!, Paper defeats Rock")
                winCount += 1
                break
            }
            else{
                return console.log("Draw")
                break
            }
        case "scissors":
            if(computerSelection === "rock"){
                console.log("You Lose! Rock defeats Scissors")
                winCount>0 ? winCount -= 1 : winCount=0
                break
            } 
            else if(computerSelection === "paper"){
                console.log("You Win!, Scissors defeats Paper")
                winCount += 1
                break
            }
            else{
                return console.log("Draw")
                break
            }
        default:
            return console.log("Please Enter a Valid Choice or enter scissor as scissors\nThis is not case sensitive but check your spellings though :)")
            break
    }
}
for(i=0;i<5;i++){
    let playerSelection = prompt("Rock, Paper or Scissors?")
    playerSelection = playerSelection.toLowerCase()
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection)
}
winCount>=3 ? console.log("You Win!, Your Score is:",winCount) : console.log("You Lose! Better luck next time, Your Score is:",winCount);