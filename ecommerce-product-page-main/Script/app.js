let img_array = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", 
"./images/image-product-3.jpg", "./images/image-product-4.jpg"];

let box = document.getElementsByClassName('box');
let flex_img = document.getElementById('flex-img');


// for (let x in box) {
//     box[x].addEventListener('click', () => {
//         flex_img.src = img_array[x];
//         // for (let y in box) {
//         //     box[y].classList.remove('active');
//         // }
//         // box[x].classList.add('active');
//     },false)
// }

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