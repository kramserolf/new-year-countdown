const newYear = "1 Jan 2022";
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minsEl = document.querySelector("#minutes");
const secsEl = document.querySelector("#seconds");

// const formatTime = time => {
//     return time < 10 ? (`0${time}`) : time;
// }
function newYearCountdown() {
    const newYearsDate = new Date(newYear);
    //get current date
    const currentDate = new Date();
    // convert to totalSeconds
    const totalSeconds = Math.floor(newYearsDate - currentDate) / 1000;
    // convert to days 
    const days = Math.floor(totalSeconds / 3600 / 24);
    // convert to hours
    const hours = Math.floor(totalSeconds / 3600 % 24);
    // convert to minutes
    const minutes = Math.floor(totalSeconds / 60) % 60;
    // convert to seconds
    const seconds = Math.floor(totalSeconds % 60);

    // console.log(days, hours, minutes, seconds);
    // append on html
    daysEl.textContent = days
    hoursEl.textContent = hours;
    minsEl.textContent = formatTime(minutes);
    secsEl.textContent = formatTime(seconds);
};

// format time to 0 if < 10
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
};
// call the function
newYearCountdown()
    // set the interval
setInterval(newYearCountdown, 1000);