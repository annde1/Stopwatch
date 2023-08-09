const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const stopBtn = document.getElementById("stopBtn");
const stopWatch = document.getElementById("myWatch");

let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

const addZero = (num) => {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
};
const updateWatchHtml = () => {
  stopWatch.innerHTML = `${addZero(hours)}:${addZero(minutes)}:${addZero(
    seconds
  )}`;
};
const updateTime = () => {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateWatchHtml();
};
//When clicking on start button set interval to update the clock every second:
startBtn.addEventListener("click", () => {
  timer = setInterval(updateTime, 1000);
});
resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  //   timer = undefined;
  seconds = 0;
  minutes = 0;
  hours = 0;
  console.log(timer);
  console.log(seconds, minutes, hours);
  updateWatchHtml();
});
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
});
