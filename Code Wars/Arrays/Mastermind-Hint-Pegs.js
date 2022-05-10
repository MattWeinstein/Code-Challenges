/*Mastermind
Mastermind is a two-player game where one player creates a four-color code from a possible six colors. The other player has ten turns to guess this code. 
After each guess, the "codemaker" places pegs corresponding to correct guesses and the "codebreaker" then guesses again, based on these pegs. Black pegs are given for every color in the guess that is correctly placed, and white pegs are given for other colors in the guess that are in the code, but were not guessed in the correct position.

Task
Your task is to implement a function that will compare the player's guess to the secret code and return an appropriate number of colored hints - one black peg for each correctly guessed color in a correct position, one white peg for each correct color in an incorrect position.
*/


function getHints(answer, guess) {
let numGuess=answer.length
  
let black = 0
let white =0

let answerArr = answer
let guessArr = guess

//Finding if a value in the answer is in correct position (black)
for(let i =0;i<guessArr.length;i++){
  if(answer[i]==guess[i]){
    black+=1
    
    // Removing the element from the array
    answerArr.splice(i,1)
    guessArr.splice(i,1)
    
    // Resetting i to adjust for new, shorter array length
    i-=1
  }
}

//Finding if a value in the answer is in the guess (white)
for(let i =0; i<guessArr.length ; i++){
  if(guessArr.includes(answerArr[i])){
    white+=1
    //Finding the index on each array of where the match is
    const guessIndex = guessArr.indexOf(answerArr[i])
    const answerIndex = answerArr.indexOf(answerArr[i])
    
    //Removing the element in the array
    guessArr.splice(guessIndex,1)
    answerArr.splice(answerIndex,1)
    i-=1
  } 
}
return {'black':black,'white':white}
}
