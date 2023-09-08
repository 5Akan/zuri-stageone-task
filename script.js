

function displayTime() {
    const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const currentDate = new Date();
const currentDayOfTheWeek = daysOfWeek[currentDate.getDay()];
const h3 = document.querySelector('h3');
h3.innerText = currentDayOfTheWeek;


const hourEl = document.getElementById('hour');
const minEl = document.getElementById('minutes');
const secEl = document.getElementById('seconds');
const milliEl = document.getElementById('milliseconds');


// function format(time) {
//   return time < 10 ? (`0${time}`) : time;
// }
const hour = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const milliseconds = currentDate.getMilliseconds();

hourEl.innerText = hour;
minEl.innerText = minutes;
secEl.innerText = seconds;
milliEl.innerText = milliseconds;
}
setInterval(displayTime, 100)