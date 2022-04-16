const planets = document.getElementsByClassName('planets');
for (let elem of planets) {
    elem.addEventListener('click', () => {
        for (let each_elem of planets) {
            each_elem.classList.remove('active');
        }
        elem.classList.add('active');
    })
}


window.onload = function() {
    async function getData() {
        let jason_data = await fetch("./data.json");
        let parsed_data = await jason_data.json();
        return parsed_data;
    }
    async function show() {
        let data = await getData();
        let planet_data = data["destinations"]
        for (let i = 0; i < planets.length; i++) {
            planets[i].addEventListener('click', () => {
                let planet_name = planets[i].id;
                let pimg = document.getElementById('p-img');
                let pname = document.getElementById('p-name');
                let pdetails = document.getElementById('p-details');
                let pdistance = document.getElementById('p-distance');
                let pdays = document.getElementById('p-days');
                pimg.src = planet_data[i].images.png;
                pname.innerText = planet_name.toUpperCase();
                pdetails.innerText =  planet_data[i].description;
                pdistance.innerText = planet_data[i].distance.toUpperCase();
                pdays.innerText = planet_data[i].travel.toUpperCase();
            })
        }
    }
    show();
}