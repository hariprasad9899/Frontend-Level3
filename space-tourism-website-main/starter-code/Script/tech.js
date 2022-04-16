const numbtn = document.getElementsByClassName('numbtn');

for (let elem of numbtn) {
    elem.addEventListener('click', () => {
        for (let each_elem of numbtn) {
            each_elem.classList.remove('active');
        }
        elem.classList.add('active');
    })
}


window.onload = function() {
    async function getData() {
        let jsonData = await fetch('./data.json');
        let parsedData = await jsonData.json();
        return parsedData;
    }

    async function show() {
        let data = await getData();
        
        let timg = document.getElementById('t-img');

        if (screen.width < 768) {
            timg.src = "./assets/technology/image-launch-vehicle-landscape.jpg";
        } else {
            timg.src = "./assets/technology/image-launch-vehicle-portrait.jpg";
        }

        for (let i = 0; i < numbtn.length;i++) {
            numbtn[i].addEventListener('click', () => {
                let tech_data = data["technology"];
                let tname = document.getElementById('t-name');
                let tdesc = document.getElementById('t-desc');
                let timg = document.getElementById('t-img');
                tname.innerText = tech_data[i].name.toUpperCase();
                tdesc.innerText = tech_data[i].description;
                if (screen.width > 768) {
                    timg.src = tech_data[i].images.portrait;
                } else {
                    timg.src = tech_data[i].images.landscape;
                }
            })
        }
    }
    show();
}