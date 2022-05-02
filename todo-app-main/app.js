const tick_buttons = document.getElementsByClassName('tick')
const sampleNode = document.getElementsByClassName('list_elem')[0];
const input = document.getElementById('input');
const list = document.getElementsByClassName('list')[0];
let cloned_node = sampleNode.cloneNode(true);

let elem = cloned_node.getElementsByTagName('p');



for (const eachbtn of tick_buttons) {
    eachbtn.addEventListener('click', () => {
        eachbtn.classList.toggle('ticked');
        if(!eachbtn.classList.contains("inp")) {
            let todo_val = eachbtn.nextElementSibling;
            todo_val.classList.toggle('strike')
        } else {
            if(input.value.length > 0) {
                let cloned_node = sampleNode.cloneNode(true);
                cloned_node.getElementsByTagName('p')[0].innerText = input.value;
                list.appendChild(cloned_node);
                input.value = "";
            }
        }
    })
}

input.addEventListener('input', () => {
    input.previousElementSibling.classList.remove('ticked');
})

let closing = function() {
    let close = document.getElementsByClassName('close');
    for(const eachCloseBtn of close) {
        eachCloseBtn.addEventListener('click', () => {
            eachCloseBtn.parentElement.style.display = "none";
        })
    }
}

closing();














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

