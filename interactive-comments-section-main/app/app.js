

// upvote and downvote
let vote = document.getElementsByClassName('vote');

for (let i = 0; i < vote.length; i++) {
    let vote_count = 0;
    let eval = vote[i].getElementsByClassName('eval');
    for (let i = 0; i < eval.length; i++) {
        eval[i].addEventListener('click', ()=> {
            if(eval[i].classList.contains('add')) {
                vote_count += 1;
                let vote_val = eval[i].nextElementSibling;
                vote_val.innerText = vote_count;
            } else if (eval[i].classList.contains('sub')) {
                let vote_val = eval[i].previousElementSibling;
                if (vote_val.innerText > 0) {
                    vote_count -= 1;
                    vote_val.innerText = vote_count;
                }
            }
        })
    }
}

var comment = document.getElementsByClassName('comment');
window.onload = function() {    
    async function getData() {
        let jason_data = await fetch("./data.json");
        let parsed_data = await jason_data.json();
        return parsed_data;
    }
    async function show() {
        let data = await getData();
        for (let i = 0; i < comment.length; i++ ){
            let x = data["comments"][i];
            let user_time = comment[i].getElementsByClassName('user-time')[0];
            let cmnt_text = comment[i].getElementsByClassName('cmnt-text')[0];
            let user_img = user_time.firstElementChild;
            let user_name = user_img.nextElementSibling;
            let createdAt = user_name.nextElementSibling;
            let user_cmnt = cmnt_text.firstElementChild;
            user_img.src = x["user"]["image"].png;
            user_name.innerText = x["user"]["username"];
            createdAt.innerText = x["createdAt"]
            user_cmnt.innerText = x["content"];
        }
    }
    show();
}