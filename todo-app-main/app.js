
// copying a node to create a clone to append in the list
const sampleNode = document.getElementsByClassName('list_elem')[0];


// function toggles completed tick for existing and newly added task's
function newElemTick(elem) {
    elem.addEventListener('click', () => {
        elem.classList.toggle('ticked');
        if(!elem.classList.contains('inp')) {
            elem.nextElementSibling.classList.toggle('strike');
        }
    })
}

// will get the existing ticke circles and adding event lisneners for them
let ticked_mark = function() {
    let tick_buttons = document.getElementsByClassName('tick')
    for(const eachbtn of tick_buttons) {
        newElemTick(eachbtn);
    }
}

ticked_mark();

// to remove the input ticket once user appened the task below
let remove_tick = function() {
        let input = document.getElementById('input');
        input.addEventListener('input', () => {
        input.previousElementSibling.classList.remove('ticked');
        
    }) 
}

remove_tick();

let enterClick = function() {
    let inp = document.getElementsByClassName('inp')[0];
    let input = document.getElementById('input');
    input.addEventListener('keypress', (event)=> {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("enterClick").click();
        }
    })
}

enterClick();

// for showing the present count of the task
let updateTotal = function() {
    let nos = document.getElementById('nos');
    let list_elem = document.getElementsByClassName('list_elem');
    nos.innerText = list_elem.length;
}

// for closing / removing a task from the list
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

// drag animation function which enables dragging
let drap_elem = function() {
    const list = document.getElementsByClassName('list')[0];
    const list_elem = document.getElementsByClassName('list_elem');

    // start and end points based on which the element can be inserted before or after
    // if dragged upwards inserting after the target or if dragged 
    //downwards inserting before the target 
    let startpoint; 
    let endpoint;

    for(const eachItem of list_elem) {

        eachItem.addEventListener('dragstart', (e) => {
            eachItem.classList.add('dragging');
            startpoint = e.clientY;
        })
    
        eachItem.addEventListener('dragend', (e) => { 
            eachItem.classList.remove('dragging');
        })
    
        eachItem.addEventListener('dragover', (e) => { 
            e.preventDefault(); 
            eachItem.classList.add('borders');
        })
    
        eachItem.addEventListener('dragleave', (e) => {
            e.preventDefault();
            eachItem.classList.remove('borders');
        })
        eachItem.addEventListener('drop', (e)=> {
            const draggable = document.querySelector('.dragging');
            const text = document.getElementsByClassName('text');
            endpoint = e.clientY;
            eachItem.classList.remove('borders');
            console.log(eachItem)

            if(startpoint < endpoint) {
                e.target.parentElement.insertBefore(draggable,e.target.nextSibling)
                console.log(e.target)
            } else if (startpoint > endpoint) {
                e.target.parentNode.insertBefore(draggable,e.target)
                console.log(e.target)
            }
        })
    }
}

drap_elem();


// main function which enables to append the task in the list
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
            // invoking the functions to update the new task's added
            updateTotal();
            newElemTick(span);
            remove_tick();
            closing();
            drap_elem();
        }
    })
}

add_list();

// function to show the active task
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

// function to show all the existing task
function sortAll() {
    let texts = [...document.getElementsByClassName('text')];
    texts.forEach((elem) => {
        elem.parentElement.style.display = "flex";
    })
    updateTotal();

}

// function to show the completed task
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


// swich statement for the onclick functions of the states
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

// function to remove the completed task
let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    let texts = [...document.getElementsByClassName('text')];
    texts.forEach((elem) => {
        if(elem.classList.contains('strike')) {
            elem.parentElement.remove();
        } 
    })
})


// functton to enable the color themes
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

