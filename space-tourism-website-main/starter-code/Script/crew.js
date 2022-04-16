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
    async function show() {
        let data = await getData();
        for (let i = 0; i < dot.length;i++) {
            dot[i].addEventListener('click', () => {
                let crew_data = data["crew"];
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

        var k = 0;
        let timerFunc = setInterval(function(){
            dot[k].click();
            k++;
            if(k > 3){
                k = 0;
            }
        },4000)
        timerFunc();
    }
    show();
}