let days = document.getElementsByClassName('days');
let hours = document.getElementsByClassName('hours');
let minutes = document.getElementsByClassName('minutes');
let seconds = document.getElementsByClassName('seconds');
const flipbox = document.getElementsByClassName('flipbox');


const launchDate = new Date("Aug 31, 2022 15:08:20");
function updateTime() {
    let presentDate = new Date();
    let difftime = Math.abs(launchDate - presentDate);
    let diffDay = Math.ceil(difftime / (1000 * 60 * 60 * 24))
    let diffHour = Math.ceil((difftime / (1000 * 60 * 60 )) % 24)
    let diffMinutes = Math.ceil((difftime/ (1000 * 60)) % 60);
    let diffSeconds = Math.ceil((difftime / 1000) % 60);
    (diffDay.toString().length == 1) ? days[0].innerText = "0" + diffDay : days[0].innerText = diffDay;
    (diffDay.toString().length == 1) ? days[1].innerText = "0" + diffDay : days[1].innerText = diffDay;
    (diffHour.toString().length == 1) ? hours[0].innerText = "0" + diffHour : hours[0].innerText = diffHour;
    (diffHour.toString().length == 1) ? hours[1].innerText = "0" + diffHour : hours[1].innerText = diffHour;
    (diffMinutes.toString().length == 1) ? minutes[0].innerText = "0" + diffMinutes : minutes[0].innerText = diffMinutes;
    (diffMinutes.toString().length == 1) ? minutes[1].innerText = "0" + diffMinutes : minutes[1].innerText = diffMinutes;
    (diffSeconds.toString().length == 1) ? seconds[0].innerText = "0" + diffSeconds : seconds[0].innerText = diffSeconds;
    (diffSeconds.toString().length == 1) ? seconds[1].innerText = "0" + diffSeconds : seconds[1].innerText = diffSeconds;
}



setInterval(()=> {
    updateTime();
    flipbox[3].classList.toggle('active');
    if(seconds[0].innerText == 60) {
        flipbox[2].classList.toggle('active');
    }
    if(minutes[0].innerText == 60) {
        flipbox[1].classList.toggle('active');
    }
    if(hours[0].innerText == 60) {
        flipbox[0].classList.toggle('active');
    }
},1000)


