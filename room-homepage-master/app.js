const open_menu = document.getElementById('open');
const close_menu = document.getElementById('close');
const mobMenuDrop = document.getElementsByClassName('mobMenuDrop')[0];


let data 

open_menu.onclick = function() {
    mobMenuDrop.classList.add('show')
}
close_menu.onclick = function() {
    mobMenuDrop.classList.remove('show');
}

