let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate random number between 0 to 10

const generateTarget=()=> Math.floor(Math.random() * 10)
//generateTarget()

//compareGuesser It will guess which 

const compareGuesses=(userInput , computerInput, targetNumber)=>{
    if (userInput > generateTarget){
        console.log("Enter Value Between 0-9")
    }
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

//Update Score

const updateScore=(winner)=>{
    if (winner==="human"){
        humanScore++;
    }
    else{
        computerScore++
    }
}

//Advance Round Function will take the game forward

const advanceRound=()=>{
    currentRoundNumber+=1;
}
advanceRound()