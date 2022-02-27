
var selectNum = document.querySelector(".selectNumber");
var feedbackElem = document.querySelector(".message");
var guessBtn = document.querySelector(".guessBtn");

var playerGuess;
var numberGuessed;

let randomNumber = Math.ceil((Math.random() * 100))

function randomNum() {
    if (document.querySelector(".selectNumber").value != null) {
        numberGuessed = document.querySelector(".selectNumber").value;
    }

    if (numberGuessed > randomNumber) {
        return "Sorry, your guess is too high.."
    }

    if (numberGuessed < randomNumber) {
        return "Sorry, your guess is too low.."
    }

    else
        return `Correct, the secret number is ${randomNumber}`
}

function anyNumber() {
    if (document.querySelector(".selectNumber").value != null) {
        numberGuessed = document.querySelector(".selectNumber").value;
    }
    console.log(numberGuessed)
    document.querySelector(".message").innerHTML = numberGuessed;
}

function game() {
    anyNumber()
    if (numberGuessed < 1) {
        document.querySelector(".errors").innerHTML = "Enter number above 0..";
        document.querySelector(".message").innerHTML = "";
        setTimeout(function () {
            location.reload()
        }, 5000);
    } else
        if (numberGuessed > 100) {
            document.querySelector(".errors").innerHTML = "Enter number below 100..";
            document.querySelector(".message").innerHTML = "";
            setTimeout(function () {
                location.reload()
            }, 5000);
        }
        else {
            if (numberGuessed != undefined) {
                document.querySelector(".display").innerHTML = randomNum();
                console.log(randomNumber)
                setTimeout(function () {
                    document.querySelector(".display").innerHTML = "";
                    document.querySelector(".message").innerHTML = "";
                }, 5000);
            }
            if (numberGuessed == randomNumber) {
                setTimeout(function () {
                    location.reload()
                }, 5000);

                setTimeout(function () {
                    document.querySelector(".showMessage").innerHTML = "New Game Started!"
                }, 5000);
            }
        }

}

guessBtn.addEventListener("click", game)