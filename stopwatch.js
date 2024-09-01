
const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsetime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        starttime = Date.now() - elapsetime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}
function stop() {

    if (isRunning) {
        clearInterval(timer);
        elapsetime = Date.now() - starttime;
        isRunning = false;
    }
}
function reset() {
    clearInterval(timer);
    starttime = 0;
    elapsetime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
}

function update() {
    const currunttime = Date.now();
    elapsetime = currunttime - starttime;

    let hours = Math.floor(elapsetime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsetime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsetime / 1000 % 60);
    let milisecond = Math.floor(elapsetime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milisecond = String(milisecond).padStart(2, "0");


    display.textContent = `${hours}:${minutes}:${seconds}:${milisecond}`;

}

