
const sampleNode = document.getElementsByClassName('list_elem')[0];

function newElemTick(elem) {
    elem.addEventListener('click', () => {
        elem.classList.toggle('ticked');
        if(!elem.classList.contains('inp')) {
            elem.nextElementSibling.classList.toggle('strike');
        }
    })
}

let ticked_mark = function() {
    let tick_buttons = document.getElementsByClassName('tick')
    for(const eachbtn of tick_buttons) {
        newElemTick(eachbtn);
    }
}

ticked_mark();

let remove_tick = function() {
        let input = document.getElementById('input');
        input.addEventListener('input', () => {
        input.previousElementSibling.classList.remove('ticked');
    }) 
}

remove_tick();

let updateTotal = function() {
    let nos = document.getElementById('nos');
    let list_elem = document.getElementsByClassName('list_elem');
    nos.innerText = list_elem.length;
}

let closing = function() {
    let close = document.getElementsByClassName('close');
    for(const eachCloseBtn of close) {
        eachCloseBtn.addEventListener('click', () => {
            eachCloseBtn.parentElement.remove();
            updateTotal();
        })
    }
}
closing();

let add_list = function() {
    let inp = document.getElementsByClassName('inp')[0];
    let input = document.getElementById('input');
    let list = document.getElementsByClassName('list')[0];
    inp.addEventListener('click', () => {
        if(input.value !== "") {
            let cloned_node = sampleNode.cloneNode(true);
            cloned_node.getElementsByTagName('p')[0].innerText = input.value;
            list.appendChild(cloned_node);
            let span = cloned_node.getElementsByTagName('span')[0];
            let list_elem = document.getElementsByClassName('list_elem');
            input.value = "";
            updateTotal();
            newElemTick(span);
            remove_tick();
            closing();
        }
    })
}

add_list();

function sortActive() {
    let texts = [...document.getElementsByClassName('text')];
    let counter = 0;
    texts.forEach((elem) => {
        if(elem.classList.contains('strike')) {
            elem.parentElement.style.display = "none";
        } else {
            elem.parentElement.style.display = "flex";
            counter += 1;
        }
    })
    let nos = document.getElementById('nos');
    nos.innerText = counter;
}

function sortAll() {
    let texts = [...document.getElementsByClassName('text')];
    texts.forEach((elem) => {
        elem.parentElement.style.display = "flex";
    })
    updateTotal();

}

function sortComplete() {
    let texts = [...document.getElementsByClassName('text')];
    let striked = document.getElementsByClassName('strike');
    texts.forEach((elem) => {
        if(elem.classList.contains('strike')) {
            elem.parentElement.style.display = "flex";
        } else {
            elem.parentElement.style.display = "none";
        }
    })
    let nos = document.getElementById('nos');
    nos.innerText = striked.length;
}


const nav = [...document.getElementsByClassName('states')]
nav.forEach(elem => {
    elem.addEventListener('click', ()=> {
        nav.forEach((e) => {e.classList.remove('active')});
        elem.classList.add('active');
        switch(elem.id) {
            case "all": 
                sortAll();
                break;
            case "active":
                sortActive();
                break;
            case "completed":
                sortComplete();
                break;
        }
    })
})


let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    let texts = [...document.getElementsByClassName('text')];
    texts.forEach((elem) => {
        if(elem.classList.contains('strike')) {
            elem.parentElement.remove();
        } 
    })
})


const switch_theme = document.getElementById('switch_theme');
const theme = document.getElementsByClassName('theme');


switch_theme.addEventListener('click', () => {
    for(let eachelem of theme) {
        eachelem.classList.toggle('white_theme');
    }
    if(switch_theme.classList.contains('white_theme')) {
        switch_theme.src = './images/icon-moon.svg';
    } else {
        switch_theme.src = './images/icon-sun.svg';
    }
})









// Drag and Drop 

// const listbox = document.querySelector('.listbox');
// const items = document.querySelectorAll('.item');
// let startpoint
// let endpoint;
// for (const eachItem of items) {
//     eachItem.addEventListener('dragstart', (e) => {
//         eachItem.classList.add('dragging');
//         startpoint = e.clientY;
//     })

//     eachItem.addEventListener('dragend', (e) => { 
//         eachItem.classList.remove('dragging');
//     })

//     eachItem.addEventListener('dragover', (e) => { 
//         e.preventDefault(); 
//         eachItem.classList.add('borders');
//     })

//     eachItem.addEventListener('dragleave', (e) => {
//         e.preventDefault();
//         eachItem.classList.remove('borders');
//     })
//     eachItem.addEventListener('drop', (e)=> {
//         const draggable = document.querySelector('.dragging');
//         endpoint = e.clientY;
//         eachItem.classList.remove('borders');
//         console.log(startpoint,endpoint)
//         if(startpoint < endpoint) {
//             e.target.parentNode.insertBefore(draggable,e.target.nextSibling)
//         } else if (startpoint > endpoint) {
//             e.target.parentNode.insertBefore(draggable,e.target)
//         }
//     })
// }

