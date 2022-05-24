function computerPlay(){
    const elements = ["rock","paper","scissors"];
    return elements[Math.floor(Math.random()*3)]
}

// Initialising the variable with selectors and values
let playerCount=0;
let compCount=0;
let playerSelection;
let result = document.querySelector(".outcome")

let rockbtn = document.getElementById('rock')
let paperbtn = document.getElementById('paper')
let scissorbtn = document.getElementById('scissors')

let main = document.querySelector('.heading')
let final = document.createElement("div")
let button = document.createElement('button')

let rockC = document.querySelector('#rockC')
let paperC = document.querySelector('#paperC')
let scissorsC = document.querySelector('#scissorsC')

// To make other choices transparent when other choice is made
function transparent(...values){
    values.forEach(value => {
        value.style.transform = 'scale(1)'
        value.style.borderColor = 'transparent'
        value.style.visibility = 'hidden'
    })
}
// To make Effects for computer choice
function transition(choice){
    if(choice == 'rock'){
        rockC.style.borderColor = 'yellow'
        rockC.style.transform = 'scale(1.4)'
        rockC.style.visibility = 'visible'
        transparent(paperC,scissorsC)
    }
    else if(choice == 'paper'){
        paperC.style.borderColor = 'yellow'
        paperC.style.transform = 'scale(1.4)'
        paperC.style.visibility = 'visible'
        transparent(rockC,scissorsC)
    }
    else if(choice == 'scissors'){           
        scissorsC.style.borderColor = 'yellow'
        scissorsC.style.transform = 'scale(1.4)'
        scissorsC.style.visibility = 'visible'
        transparent(rockC,paperC)
    }
    else{
        return;
    }
}

// Eventlistener functions when a player clicks the choice
let rock = function (){
    player = 'rock'
    computer = computerPlay();
    transition(computer)
    playRound(player,computer)
    document.querySelector(".player").innerText= `Player Score: ${playerCount}`
    document.querySelector(".computer").innerText= `Computer Score: ${compCount}`
}

let paper = function (){
    player = 'paper'
    computer = computerPlay();
    transition(computer)
    playRound(player,computer)
    document.querySelector(".player").innerText= `Player Score: ${playerCount}`
    document.querySelector(".computer").innerText= `Computer Score: ${compCount}`
}

let scissors = function (){
    player = 'scissors'
    computer = computerPlay();
    transition(computer)
    playRound(player,computer)
    document.querySelector(".player").innerText= `Player Score: ${playerCount}`
    document.querySelector(".computer").innerText= `Computer Score: ${compCount}`
}

rockbtn.addEventListener('click', rock);
paperbtn.addEventListener('click', paper);
scissorbtn.addEventListener('click', scissors);

// Refresh Function
function reload(){
    window.location.reload();
}

// Returning the computer choices to normal state after the winner is decided
function normal(){
    rockC.style.backgroundColor = 'transparent'
    paperC.style.backgroundColor = 'transparent'
    scissorsC.style.backgroundColor = 'transparent'
    rockC.style.transform = 'scale(1)'
    paperC.style.transform = 'scale(1)'
    scissorsC.style.transform = 'scale(1)'
}

// Game Decision and points counter based on choices
function playRound(playerSelection,computerSelection){
    if(playerCount < 5 && compCount < 5){
        switch(playerSelection){
            case "rock":
                if(computerSelection === "paper"){
                    outcome(`You Lose! Paper defeats Rock. Player point: ${playerCount}, Computer point: ${compCount}`);
                    compCount+=1
                    break
                } 
                else if(computerSelection === "scissors"){
                    outcome(`You Win!, Rock defeats Scissors. Player point: ${playerCount}, Computer point: ${compCount}`);
                    playerCount += 1;
                    break
                }
                else{
                    outcome(`Draw, No point. Player point: ${playerCount}, Computer point: ${compCount}`);
                    break
                }
            case "paper":
                if(computerSelection === "scissors"){
                    outcome(`You Lose! Scissors defeats paper. Player point: ${playerCount}, Computer point: ${compCount}`);
                    compCount+=1
                    break
                } 
                else if(computerSelection === "rock"){
                    outcome(`You Win!, Paper defeats Rock. Player point: ${playerCount}, Computer point: ${compCount}`);
                    playerCount += 1;
                    break
                }
                else{
                    outcome(`Draw, No point. Player point: ${playerCount}, Computer point: ${compCount}`);
                    break
                }
            case "scissors":
                if(computerSelection === "rock"){
                    outcome(`You Lose! Rock defeats Scissors. Player point: ${playerCount}, Computer point: ${compCount}`);
                    compCount+=1
                    break
                } 
                else if(computerSelection === "paper"){
                    outcome(`You Win!, Scissors defeats Paper. Player point: ${playerCount}, Computer point: ${compCount}`);
                    playerCount += 1;
                    break
                }
                else{
                    outcome(`Draw, No point. Player point: ${playerCount}, Computer point: ${compCount}`)
                    break
                }
            }
    }
    if(playerCount == 5){
        final.textContent = 'Congragulations!!, You Reached 5 points before computer.'
        finalResult(main,final)
        modify(final,button)
        outcome(`Final Round Player Choice: ${playerSelection}, Computer Choice: ${computerSelection}`)
        normal()
        rockbtn.removeEventListener('click', rock)
        paperbtn.removeEventListener('click', paper)
        scissorbtn.removeEventListener('click', scissors)
        transparent(rockC,paperC,scissorsC)
        }
    else if(compCount == 5){
        final.textContent = "You Lose!!! Computer Reached 5 points before you"
        finalResult(main,final)
        modify(final,button)
        outcome(`Final Round; Player Choice: ${playerSelection}, Computer Choice: ${computerSelection}`)
        normal()
        rockbtn.removeEventListener('click', rock)
        paperbtn.removeEventListener('click', paper)
        scissorbtn.removeEventListener('click', scissors)
        transparent(rockC,paperC,scissorsC)
        }
}

// Replacing the header with result heading and button
function finalResult(add,replace){
    add.parentNode.replaceChild(replace,add)
    replace.append(button)
}

// Styling the header and button of the finalResult
function modify(text,button1){
    text.style.fontSize = 'x-large';
    text.style.fontWeight = 'bolder';
    text.style.margin = '20px 10px';
    text.style.textAlign = 'center'
    text.style.display = 'flex'
    text.style.flexDirection = 'column'
    text.style.alignItems = 'center'
    text.style.gap = '10px'
    text.style.fontFamily = 'Bungee Shade'
    button1.textContent = 'Play Again'
    button1.addEventListener('click',reload)
    button1.style.height = '50px'
    button1.style.width = '100px'
    button1.style.fontWeight = 'bold'
    button1.style.fontSize = 'medium'
    button1.className = 'buttonHover'
    button1.style.fontFamily = 'Bungee'
}

// Updating Results after a choice is made
function outcome(string){
    let line = document.createElement("li")
    let content = document.createTextNode(string)
    line.appendChild(content)
    result.insertBefore(line,result.firstChild)
}