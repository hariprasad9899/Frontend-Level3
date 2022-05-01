let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');


const launchDate = new Date("May 15, 2022 00:00:00");



setInterval(()=> {
    let presentDate = new Date();
    let difftime = Math.abs(launchDate - presentDate);
    let diffDay = Math.ceil(difftime / (1000 * 60 * 60 * 24))
    let diffHour = Math.ceil((difftime / (1000 * 60 * 60 )) % 24)
    let diffMinutes = Math.ceil((difftime/ (1000 * 60)) % 60);
    let diffSeconds = Math.ceil((difftime / 1000) % 60);
    days.innerText = diffDay;
    hours.innerText = diffHour
    minutes.innerText = diffMinutes;
    seconds.innerText = diffSeconds;
},1000)

