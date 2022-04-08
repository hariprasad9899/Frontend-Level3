

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

// adding default comments from json data onload 
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
            user_img.src = x["user"]["image"]["png"];
            user_name.innerText = x["user"]["username"];
            createdAt.innerText = x["createdAt"]
            user_cmnt.innerText = x["content"];


            if (x.replies.length > 0) {
                let current_elem = comment[i];
                for (let i = 0; i < x.replies.length; i++) {
                    current_elem = current_elem.nextElementSibling;
                    let user_time = current_elem.getElementsByClassName('user-time')[0];
                    let cmnt_text = current_elem.getElementsByClassName('cmnt-text')[0];
                    let p_elem = cmnt_text.getElementsByTagName('p')[0];
                    let reply_to = p_elem.getElementsByTagName('span')[0];
                    let user_img = user_time.firstElementChild;
                    let user_name = user_img.nextElementSibling;
                    let createdAt = user_name.nextElementSibling;
                    user_img.src = x.replies[i].user.image.png;
                    user_name.innerText = x.replies[i].user.username;
                    createdAt.innerText = x.replies[i].createdAt;
                    cmnt_text.innerText = x.replies[i].content;
                    reply_to.innerText = "@" + x.replies[i].replyingTo;
                    cmnt_text.innerText = reply_to.innerText +" "+ x.replies[i].content;
                }
            }
        }
    }
    show();
}

function getInputDiv() {
    
}

const myCommentDiv = document.createElement('div');
const img_elem = document.createElement('img');
const textarea_elem = document.createElement('textarea');
const button_elem = document.createElement('button');
img_elem.src = "./images/avatars/image-juliusomo.png";
myCommentDiv.className = 'comment-input';
textarea_elem.id = "comment-box";
textarea_elem.placeholder = "Add a comment...";
textarea_elem.rows = "5.5";
textarea_elem.cols = "10";
button_elem.innerText = "SEND";
myCommentDiv.appendChild(img_elem);
myCommentDiv.appendChild(textarea_elem);
myCommentDiv.appendChild(button_elem);



const reply_btn = document.getElementsByClassName('reply-btn');

for (let i = 0; i < reply_btn.length; i++) {
    reply_btn[i].onclick = function() {
        window.scrollBy(0, 100);
        myCommentDiv.remove();
        textarea_elem.value = "";
        let parentDiv = reply_btn[i].parentElement;
        if (parentDiv.classList.contains('reply-cmnt')) {
            myCommentDiv.style.width = "90%";
            myCommentDiv.style.alignSelf = "flex-end";
            parentDiv.after(myCommentDiv)
        } else {
            myCommentDiv.style.width = "100%";
            myCommentDiv.style.alignSelf = "flex-start";
            let last = parentDiv;
            while(last.nextElementSibling) {
                if (last.nextElementSibling.classList.contains("reply-cmnt")) {
                    last = last.nextElementSibling;
                } else {
                    break;
                }
            }
            if (last.classList.contains("reply-cmnt")) {
                last.after(myCommentDiv);
            } else {
                last.after(myCommentDiv);
            }
        }
    }
}

let myReplyComment = document.getElementsByClassName('reply-cmnt')[0];
let clonedNode = myReplyComment.cloneNode(true);

let sendButton = myCommentDiv.getElementsByTagName('button')[0];

const container = document.getElementsByClassName('container')[0];

sendButton.onclick = function() {
    let main_elem = myCommentDiv.previousElementSibling;
    main_elem.after(clonedNode)
    myCommentDiv.remove()
}