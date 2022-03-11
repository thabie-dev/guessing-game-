function randomNum(numberGuessed, randomNumber){
    if (numberGuessed > randomNumber){
        return "sorry, your guess is too high.."
    }
    
    if (numberGuessed < randomNumber){
        return "sorry, your guess is too low.."
    }

    else
    return `correc, the secret number is ${randomNumber}`
}