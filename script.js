let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate random number between 0 to 10

const generateTarget=()=> Math.floor(Math.random() * 10)
//generateTarget()

//compareGuesser 

const compareGuesses=(userInput , computerInput, targetNumber)=>{
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