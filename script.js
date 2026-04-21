let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");

guessBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", resetGame);

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const attemptsText = document.getElementById("attempts");

    const guess = Number(guessInput.value);

    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "⚠️ Enter a number between 1 and 100";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed it!";
        message.style.color = "#00ffcc";
    } else if (guess > randomNumber) {
        message.textContent = "📉 Too high!";
        message.style.color = "#ffd166";
    } else {
        message.textContent = "📈 Too low!";
        message.style.color = "#ffd166";
    }

    attemptsText.textContent = "Attempts: " + attempts;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
}