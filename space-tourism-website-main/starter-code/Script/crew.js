const dot = document.getElementsByClassName('dot');

for (let elem of dot) {
    elem.addEventListener('click', () => {
        for (let each_elem of dot) {
            each_elem.classList.remove('active');
        }
        elem.classList.add('active');
    })
}



window.onload = function() {
    async function getData() {
        let json_data = await fetch('./data.json');
        let parsed_data = await json_data.json();
        return parsed_data;
    }
    var slideIndex = 0;
    async function show() {
        let data = await getData();
        for (let i = 0; i < dot.length;i++) {
            dot[i].addEventListener('click', () => {
                let crew_data = data["crew"];
                slideIndex = i;
                let crole = document.getElementById('c-role');
                let cname = document.getElementById('c-name');
                let cbio = document.getElementById('c-bio');
                let cimg = document.getElementById('c-img');
                crole.innerText = crew_data[i].role.toUpperCase();
                cname.innerText = crew_data[i].name.toUpperCase();
                cbio.innerText = crew_data[i].bio;
                cimg.src = crew_data[i].images.png;
            })
        }

      
        let timerFunc = setInterval(function(){
            dot[slideIndex].click();
            slideIndex++;
            if(slideIndex > 3){
                slideIndex = 0;
            }
        },4000)
        timerFunc();
    }
    show();
}