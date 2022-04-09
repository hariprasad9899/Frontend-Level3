
// upvote and downvote
let voting = function() {
var vote = document.getElementsByClassName('vote');
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
}


voting();

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


const myCommentDiv = document.createElement('div');
const img_elem = document.createElement('img');
const textarea_elem = document.createElement('textarea');
const button_elem = document.createElement('button');
myCommentDiv.className = "comment-input";
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

let main_func = function() {
    var cmnt_wrapper = document.getElementsByClassName('cmnt-wrapper');
    var cmnt_type = "";
    for(let j = 0; j < cmnt_wrapper.length; j++) {
        const reply_btn = cmnt_wrapper[j].getElementsByClassName('reply-btn');
        for (let i = 0; i <reply_btn.length;i++) {
            reply_btn[i].addEventListener('click', () => {
                myCommentDiv.remove()
                textarea_elem.value = "";
                if (reply_btn[i].parentElement.classList.contains('reply-cmnt')) {
                    let commentDiv = reply_btn[i].parentElement;
                    myCommentDiv.style.width = "90%";
                    myCommentDiv.style.alignSelf = "flex-end";
                    commentDiv.after(myCommentDiv);
                    console.log(commentDiv);
                    cmnt_type = "replied";
                } else {
                    let commentDiv = reply_btn[i].parentElement.parentElement;
                    myCommentDiv.style.width = "100%";
                    myCommentDiv.style.alignSelf = "flex-start";
                    commentDiv.appendChild(myCommentDiv)
                    cmnt_type = "comment";
                }
            })
        }
    }
    return cmnt_type;
}

main_func();

let myReplyComment = document.getElementsByClassName('reply-cmnt')[1];
let clonedNode = myReplyComment.cloneNode(true);
const btn_elem = myCommentDiv.getElementsByTagName('button');

for (let i = 0; i < btn_elem.length; i++) {
    btn_elem[i].onclick = function() {
        if(textarea_elem.value != "") {
            myReplyNode = clonedNode.cloneNode(true);
            let replyDiv = myReplyNode.getElementsByClassName('cmnt-text')[0]
            let replyText = replyDiv.getElementsByTagName('p')[0];
            let user_time = myReplyNode.getElementsByClassName("user-time")[0];
            let img_elem = user_time.getElementsByTagName('img')[0];
            let name_elem = user_time.getElementsByTagName('span')[0];
            let time_elem = user_time.getElementsByTagName('span')[1];
            img_elem.src = "./images/avatars/image-juliusomo.png";
            replyText.innerText = textarea_elem.value;
            name_elem.innerText = "juliusomo";
            time_elem.innerText = "1 Min ago";
            let cmnt_type = main_func();
            if(cmnt_type == "comment") {
                let cmnt_wrapper = btn_elem[i].parentElement.parentElement;
                cmnt_wrapper.appendChild(myReplyNode);
                main_func()
                voting();
            } else {
                let cmnt_wrapper_rep = btn_elem[i].parentElement.previousElementSibling;
                cmnt_wrapper_rep.after(myReplyNode);
                main_func()
                voting();
            }
            myCommentDiv.remove();
        }   
    }
}








