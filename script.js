function computerPlay(){
    const elements = ["rock","paper","scissors"];
    return elements[Math.floor(Math.random()*3)]
}

let playerCount=0;
let compCount=0;

function playRound(playerSelection,computerSelection){
    switch(playerSelection){
        case "rock":
            if(computerSelection === "paper"){
                console.log("You Lose! Paper defeats Rock");
                break
            } 
            else if(computerSelection === "scissors"){
                console.log("You Win!, Rock defeats Scissors");
                winCount += 1;
                break
            }
            else{
                return console.log("Draw");
            }
        case "paper":
            if(computerSelection === "scissors"){
                console.log("You Lose! Scissors defeats paper");
                break
            } 
            else if(computerSelection === "rock"){
                console.log("You Win!, Paper defeats Rock");
                winCount += 1;
                break
            }
            else{
                return console.log("Draw");
            }
        case "scissors":
            if(computerSelection === "rock"){
                console.log("You Lose! Rock defeats Scissors");
                break
            } 
            else if(computerSelection === "paper"){
                console.log("You Win!, Scissors defeats Paper");
                winCount += 1;
                break
            }
            else{
                return console.log("Draw")
            }
        default:
            return console.log("Please Enter a Valid Choice or enter scissor as scissors\nThis is not case sensitive but check your spellings though :)")
    }
}
let playerSelection = ;
let computerSelection = computerPlay();
playRound(playerSelection,computerSelection)
