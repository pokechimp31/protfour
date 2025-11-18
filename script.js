// -------------------------------
// ProtIV Domain Cost Tracker
// Full dollar + decimal penny tracker
// -------------------------------

const purchaseDate = new Date("2025-11-17T20:00:00");
const totalSecondsPerCent = 8 * 3600 + 38 * 60 + 41;

// Get HTML elements
const amountElement = document.getElementById('amount');
const countdownElement = document.getElementById('countdown');
const amountPenniesElement = document.getElementById('amount-pennies');
const countdownPenniesElement = document.getElementById('countdown-pennies');

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(hrs).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

function updateTracker() {
    const now = new Date();
    const secondsElapsed = (now - purchaseDate) / 1000;

    // ---- Full dollar tracker (existing) ----
    const centsSpent = Math.floor(secondsElapsed / totalSecondsPerCent);
    amountElement.textContent = (centsSpent * 0.01).toFixed(2);

    const secondsIntoCurrentCent = secondsElapsed % totalSecondsPerCent;
    countdownElement.textContent = formatTime(totalSecondsPerCent - secondsIntoCurrentCent);

    // ---- Decimal penny tracker (new) ----
    const decimalPennies = (secondsElapsed / totalSecondsPerCent).toFixed(4); // fraction of a penny
    amountPenniesElement.textContent = decimalPennies;

    const secondsIntoDecimal = secondsElapsed % totalSecondsPerCent;
    countdownPenniesElement.textContent = formatTime(totalSecondsPerCent - secondsIntoDecimal);
}

// Update every second
setInterval(updateTracker, 1000);
updateTracker();
