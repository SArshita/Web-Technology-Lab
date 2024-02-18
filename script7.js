let countdown;
let timerDisplay = document.getElementById('timer');

function startTimer() {
    // Set the countdown time in seconds
    const seconds = 300; // 5 minutes
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // Check if we should stop the countdown
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // Display the remaining time
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    timerDisplay.textContent = display;
}
