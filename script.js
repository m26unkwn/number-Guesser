let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate random number between 0 to 10

const generateTarget=()=> Math.floor(Math.random() * 10)
//generateTarget()

//compareGuesser It will guess which 

const compareGuesses=(userInput , computerInput, targetNumber)=>{
    if (userInput<0 || userInput > 9){
        alert("Enter Value Between 0-9")
    }
    while (userInput < 9){
    if ((Math.abs(userInput,targetNumber)) === (Math.abs(computerInput,targetNumber))){
        return true
    }
    if ((Math.abs(userInput,targetNumber)) > (Math.abs(computerInput,targetNumber))){
        return true
    }
    else{
        return false
    }
}
}

//Update Score

const updateScore=(winner)=>{
    if (winner==="human"){
        humanScore++;
    }
    else if(winner ==="computer"){
        computerScore++
    }
}

//Advance Round Function will take the game forward

const advanceRound=()=>{
    if (currentRoundNumber<10){
    currentRoundNumber+=1;}
    else{
        return updateScore();
    }
}
advanceRound()