const MELTDOWN_DATE = new Date("2025-11-14T14:20:00");

function startFixedCountUp() {
    const display = document.getElementById("countup-display");
    if (!display) return console.error("Element not found");

    setInterval(() => {
        const now = new Date();
        let diff = now - MELTDOWN_DATE;
        if (diff < 0) diff = 0;

        let seconds = Math.floor(diff / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours   = Math.floor(minutes / 60);
        let days    = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours   %= 24;

        display.innerText = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    }, 1000);
}

window.addEventListener("DOMContentLoaded", startFixedCountUp);
