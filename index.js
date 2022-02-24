//const randomElem =document.querySelector(".random");
let randomNumber = Math.ceil((Math.random() * 100));

//randomNumber.innerHTML = randomNumber;
var number_guess = document.querySelector(".guesstxt");
var guess_btn = document.querySelector(".guess_btn");
var message = document.querySelector(".message");

function guessBtnClicked() {
    
  if (number_guess.value < randomNumber) {
    message.innerHTML = "Your guess is too low";
  } else if (number_guess.value > randomNumber) {
    message.innerHTML = "Your guess is too high";
  } else {
    message.innerHTML = 'correct, the secret number is ${guessedNo}';
  }

  setTimeout (function(){
    message.innerHTML ="";

}, 5000);
}


guess_btn.addEventListener('click', guessBtnClicked);
