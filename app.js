// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(),
    guessesLeft = 3;

// UI Elements
 const game = document.querySelector('#game'),
       minNum = document.querySelector('.min-num'),
       maxNum = document.querySelector('.max-num'),
       guessBtn = document.querySelector('#guess-btn'),
       guessInput = document.querySelector('#guess-input'),
       message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min,
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});


// Listen for guess
guessBtn.addEventListener('click', function () {
     let guess = parseInt(guessInput.value);

    //  Validate make sure, it's not lower than min 
    // nore higher than max!
    if(isNaN(guess) || guess < min || guess > max ){
        // stop game if any is true
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // check if won

    if(guess === winningNum){
        // disable input
        // guessInput.disabled = true;
        // change border color
        // guessInput.style.borderColor = 'green';
        gameOver(true, `${winningNum} is correct! YOU WIN!`);
        // setMessage(`${winningNum} is correct! YOU WIN!`,'green')

    }else{
        // subtract from guesses left
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // Game Over
            // guessInput.disabled = true;
            // change border color
            // guessInput.style.borderColor = 'red';
            gameOver(false, `Game over, you lost. the correct number was ${winningNum}`);

            // setMessage(`Game over, you lost. the correct number was ${winningNum}`,'red')
        }else{
             // Game continues
            guessInput.style.borderColor = 'red';
            
            // clear input
            guessInput.value = '';

            // losing message
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red')
        }
    }
});
// Game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg)

    // Play again
    guessBtn.value = "Play again";
    guessBtn.className += "play-again";
}

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
};

// erstellt randomNummer für winningNum
function getRandomNum() {
    return Math.floor(Math.random()*(max-min+1)+min)
}