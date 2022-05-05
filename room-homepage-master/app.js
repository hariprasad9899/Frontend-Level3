const open_menu = document.getElementById('open');
const close_menu = document.getElementById('close');
const mobMenuDrop = document.getElementsByClassName('mobMenuDrop')[0];


let data = {
    model1 : {
        title: `Discover innovative ways to decorate`,
        property: `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`,
        Des: './images/desktop-image-hero-1.jpg',
        Mob: './images/mobile-image-hero-1.jpg'
    },
    model2 : {
        title : `We are available all across the globe`,
        property : `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`,
        Des : './images/desktop-image-hero-2.jpg',
        Mob : './images/mobile-image-hero-2.jpg'
    },
    model3 : {
        title : `Manufactured with the best materials`,
        property : `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`,
        Des : './images/desktop-image-hero-3.jpg',
        Mob : './images/mobile-image-hero-3.jpg'
    }
}

open_menu.onclick = function() {
    mobMenuDrop.classList.add('show')
}
close_menu.onclick = function() {
    mobMenuDrop.classList.remove('show');
}


let iterable_array = ["model1","model2","model3"]
const title = document.getElementById('title');
const property = document.getElementById('property');
const move = [...document.getElementsByClassName('move')]
const imgDes = document.getElementsByClassName('imgDesktop')[0];
const imgMob = document.getElementsByClassName('imgMobile')[0];

function show(c) {
    title.innerText = data[iterable_array[c]].title;
    property.innerText = data[iterable_array[c]].property;
    if(imgDes.style.display == "block") {
        imgDes.src = data[iterable_array[c]].Des;
    } else if (imgMob.style.display == 'block') {
        imgMob.src = data[iterable_array[c]].Mob;
    }
}

let counter = 0;
move.forEach((elem) => {
    elem.addEventListener('click', () => {
        if(elem.classList.contains('sub')) {
            if(counter > 0) {
                counter -= 1;
                show(counter)
            }
        } else if (elem.classList.contains('add')) {
            if(counter < 3) {
                counter += 1;
                if(counter == 3) {counter = 2};
                show(counter)
            }
        }
    })
});


const shop = document.getElementById('shop');
const arrow = document.getElementById('arrow');
shop.addEventListener('mouseover', () => {
    arrow.classList.remove('reverse');
    arrow.classList.add('move');
})
shop.addEventListener('mouseleave', () => {
    arrow.classList.remove('move');
    arrow.classList.add('reverse');
})