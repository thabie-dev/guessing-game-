
//const randomElem =document.querySelector(".random");
let randomNumber = Math.ceil((Math.random() * 100))

//randomNumber.innerHTML = randomNumber;
const number_guess = document.querySelector(".number_guess");
const guess_btn = document.querySelector(".guess_btn");
const message = document.querySelector(".message");

function guessBtnClicked(){
    const guessedNo = number(number_guess.value);
     if (guessedNo < randomNumber) {
         message.innerHTML = "Your guess is too low";

     } else if (guessedNo> randomNumber) {
         message.innerHTML = "Your guess is too high";
     } else {
        message.innerHTML= 'correct, the secret number is ${guessedNo}';
     }

     setTimeout (function(){
         message.innerHTML ="";

     }, 2000);

    }
guess_btn.addEventListener('click', guessBtnClicked)

     
