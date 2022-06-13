/*  Purpose of the app is to guess a number and also have the computer guess a number, if the guessed number is equal to the number the computer guessed then display the value
your guess was correct, but if the user guess is not equal to the computer guess, display this guess was not correct
*/

let inputField = document.getElementById('inputField')
let guessButton = document.getElementById('guessPicker')
let textField = document.getElementById('textField')
let computerGuess = Math.floor(Math.random()*20)

guessButton.addEventListener('click', function(){
    if(inputField.value < 1 || inputField.value > 20){
        textField.innerHTML = ("input a number greater than 1 and less than 20")
    } else if(inputField.value == computerGuess){
        textField.innerHTML = ("You got the answer!")
    } else{
        textField.innerHTML = ("Try again")
    } 
})




