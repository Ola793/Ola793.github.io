document.addEventListener('DOMContentLoaded', function () {
    const deadline = new Date(Date.now() + (24 * 60 * 60 * 1000 + 999));

    let timerId = null;

    function countdownTimer() {
      const diff = deadline - new Date();

      if (diff <= 0) {
        clearInterval(timerId);
      }

      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    const $days = document.querySelector('.timer_days');
    const $hours = document.querySelector('.timer_hours');
    const $minutes = document.querySelector('.timer_minutes');
    const $seconds = document.querySelector('.timer_seconds');

    countdownTimer();

    timerId = setInterval(countdownTimer, 1000);
}); 