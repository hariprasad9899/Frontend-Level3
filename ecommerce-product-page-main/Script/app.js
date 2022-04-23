let img_array = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", 
"./images/image-product-3.jpg", "./images/image-product-4.jpg"];

let box = document.getElementsByClassName('box');
let flex_img = document.getElementById('flex-img');


for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', () => {
        flex_img.src = img_array[i];
        for (let i = 0; i < box.length; i++) {
            box[i].classList.remove('active');
        }
        box[i].classList.add('active');
    })
}

let counting = function() {
    var counter = document.getElementsByClassName('counter');
        for (let i = 0; i < counter.length; i++) {
            let count = 0;
            let eval = counter[i].getElementsByClassName('eval');
            for (let i = 0; i < eval.length; i++) {
                eval[i].addEventListener('click', ()=> {
                    if(eval[i].classList.contains('add')) {
                        count += 1;
                        let val = eval[i].previousElementSibling;
                        val.innerText = count;
                    } else if (eval[i].classList.contains('sub')) {
                        let val = eval[i].nextElementSibling;
                        if (val.innerText > 0) {
                            count -= 1;
                            val.innerText = count;
                        }
                    }
                })
            }
        }
    }
counting();


let change = document.getElementsByClassName('change');
let img_box = document.getElementById('img-box');

for (let i = 0; i < change.length;i++) {
    var slideIndex = 0;
    change[i].addEventListener('click', () => {
        if(change[i].classList.contains('next')) {
            slideIndex += 1;
            if (slideIndex > 3) {
                slideIndex = 0;
            }
        } else if (change[i].classList.contains('prev')) {
            slideIndex -= 1;
            if (slideIndex < 0) {
                slideIndex = 3;
            }
        }
        img_box.src = img_array[slideIndex];
    })
}

let switch_img = document.getElementsByClassName('switch');
let lightbox_img = document.getElementById('lightbox-img');
for (let i = 0; i < switch_img.length;i++) {
    var slideIndex = 0;
    switch_img[i].addEventListener('click', () => {
        if(switch_img[i].classList.contains('next')) {
            slideIndex += 1;
            if (slideIndex > 3) {
                slideIndex = 0;
            }
        } else if (switch_img[i].classList.contains('prev')) {
            slideIndex -= 1;
            if (slideIndex < 0) {
                slideIndex = 3;
            }
        }
        lightbox_img.src = img_array[slideIndex];
    })
}



var height_of_screen = screen.height;
const lightbg = document.getElementById('lightbg')
const close_btn = document.getElementById('close');
const lightbox  = document.getElementsByClassName('lightbox')[0];
close_btn.onclick = function() {
    lightbox.classList.remove('show');
    lightbg.style.display = "none";
}

flex_img.onclick = function() {
    lightbox.classList.add('show');
    lightbg.style.display = "block";
    lightbg.style.height = height_of_screen + "px";
}



const cart = document.getElementsByClassName('cart')[0];
const cart_details = document.getElementsByClassName('cart-details')[0];
const checkout = document.getElementById('checkout-btn');
const quan = document.getElementById('quan');
const quanCart = document.getElementById('quanCart');
const val = document.getElementById('val');
const del = document.getElementById('del');
const info = document.getElementsByClassName('info')[0];
const nocart = document.getElementsByClassName('nocart')[0];


cart.onclick = function() {
    cart_details.style.display = "flex";
    if(info.style.display == "" || info.style.display == "none") {
        setTimeout(() => {
            cart_details.style.display = "none";
        },2000)
    }
}

checkout.onclick = function() {
    cart_details.style.display = "none";
}

const addCart = document.getElementById('addCart');


addCart.onclick = function() {
    const qValue = document.getElementById('qValue').innerText;
    if(qValue > 0) {
        info.style.display = 'flex';
        nocart.style.display = "none";
        quan.style.backgroundColor = "hsl(26, 100%, 55%)";
        quan.innerText = qValue;
        quanCart.innerText = qValue;
        val.innerText = 125 * qValue;
    }
    else {
        alert("Please add some quantity")
    }
}


del.onclick = function() {
    info.style.display = 'none';
    nocart.style.display = "block";
    quan.innerText = "";
    quan.style.backgroundColor = "transparent";
    setTimeout(() => {
        cart_details.style.display = "none";
    },2000)
}


const btn_open = document.getElementById('btn-open');
const btn_close = document.getElementById('btn-close');
const side_menu = document.getElementsByClassName('mob-menu')[0];
btn_open.onclick = function() {
    side_menu.style.left = "0px";
    document.body.classList.add('stop-scrolling');
}
btn_close.onclick = function() {
    side_menu.style.left = "-380px";
    document.body.classList.remove('stop-scrolling');
}

const closeMenu = document.getElementsByClassName('closeMenu');

for(let i = 0; i < closeMenu.length; i++) {
    closeMenu[i].addEventListener('click', () => {
        side_menu.style.left = "0px";
    })
}