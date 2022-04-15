
// adding event listener to the active menus 
const menus = document.getElementsByClassName('menus');
for (let elem of menus) {
    elem.addEventListener('click', () => {
        for (let each_elem of menus) {
            each_elem.classList.remove('active');
        }
        elem.classList.add('active');
    })
}


// adding onclick functions to show side menu
const btn_open = document.getElementById('btn-open');
const btn_close = document.getElementById('btn-close');

btn_open.onclick = function() {
    const side_menu = document.getElementsByClassName('side-menu')[0];
    side_menu.style.visibility = 'visible';
    document.body.classList.add('stop-scrolling');
}
btn_close.onclick = function() {
    const side_menu = document.getElementsByClassName('side-menu')[0];
    side_menu.style.visibility = 'hidden';
    document.body.classList.remove('stop-scrolling');
}
