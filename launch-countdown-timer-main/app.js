let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');


const launchDate = new Date("May 09, 2022 00:00:00");

function updateTime() {
    let presentDate = new Date();
    let difftime = Math.abs(launchDate - presentDate);
    let diffDay = Math.ceil(difftime / (1000 * 60 * 60 * 24))
    let diffHour = Math.ceil((difftime / (1000 * 60 * 60 )) % 24)
    let diffMinutes = Math.ceil((difftime/ (1000 * 60)) % 60);
    let diffSeconds = Math.ceil((difftime / 1000) % 60);
    (diffDay.toString().length == 1) ? days.innerText = "0" + diffDay : days.innerText = diffDay;
    (diffHour.toString().length == 1) ? hours.innerText = "0" + diffHour : hours.innerText = diffHour;
    (diffMinutes.toString().length == 1) ? minutes.innerText = "0" + diffMinutes : minutes.innerText = diffMinutes;
    (diffSeconds.toString().length == 1) ? seconds.innerText = "0" + diffSeconds : seconds.innerText = diffSeconds;
}

// setInterval(()=> {
//     updateTime();
// },1000)

