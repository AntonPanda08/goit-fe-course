class CountdownTimer {
  constructor(obj) {
    this.selector = obj.selector;
    this.targetDate = obj.targetDate.getTime();
  }

  getTimeToWait() {
    const daysToWaitRef = document.querySelector('.value[data-value="days"]');
    const hoursToWaitRef = document.querySelector('.value[data-value="hours"]');
    const minsToWaitRef = document.querySelector('.value[data-value="mins"]');
    const secsToWaitRef = document.querySelector('.value[data-value="secs"]');
    const intervalId = setInterval(() => {
      const time = this.targetDate - Date.now();
      if (time <= 1) {
        daysToWaitRef.textContent = '0';
        hoursToWaitRef.textContent = '00';
        minsToWaitRef.textContent = '00';
        secsToWaitRef.textContent = '00';
        clearInterval(intervalId);
        return;
      }
      daysToWaitRef.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
      hoursToWaitRef.textContent = String(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      ).padStart(2, '0');
      minsToWaitRef.textContent = String(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      ).padStart(2, '0');
      secsToWaitRef.textContent = String(
        Math.floor((time % (1000 * 60)) / 1000),
      ).padStart(2, '0');
    }, 1000);
  }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2021'), // Countdown to New Year
});

timer.getTimeToWait();
