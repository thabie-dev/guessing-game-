let randomNumber = Math.ceil((Math.random()* 100))

const number_guess = document.querySelector(".number_guess");
const guess_btn = document.querySelector(".guess_btn");
const message = document.querySelector(".message");

function guessbtnClicked(){
    const guessedNo = Number(number_guess.value);
     if (guessedNo< randomNumber) {
         message.innerHTML = "Your guess is too low";

     } else if (guessedNo> randomNumber) {
         message.innerHTML = "Your guess is too high";
     } else {
        message.innerHTML= 'correct, the secret number is ${guessedNo}'};
     }

     
