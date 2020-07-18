const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const body = document.querySelector('body');
const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');
const backgroundColorChange = () => {
  body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
};
let intervalId = 0;
let isActive = false;

const changeColor = {
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(backgroundColorChange, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
  },
};
startRef.addEventListener('click', changeColor.start.bind(changeColor));
stopRef.addEventListener('click', changeColor.stop.bind(changeColor));
