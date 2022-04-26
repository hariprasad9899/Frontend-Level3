
const ball = document.getElementsByClassName('ball')[0];
const nums = document.getElementsByClassName('nums');
const pack = document.getElementsByClassName('pack');
const pipe = document.getElementById('pipe');
const theme1 = ["theme-one","keypad-theme-one","clear-theme-one","eq-theme-one"];
const theme2 = ["theme-two","keypad-theme-two","clear-theme-two","eq-theme-two"];
const theme3 = ["theme-three","keypad-theme-three","clear-theme-three","eq-theme-three"];

for(const each of nums) {
    each.onclick = function() {
        switch(each.id) {
            case "one":
                themeOne();
                break;
            case "two":
                themeTwo();
                break;
            case "three":
                themeThree();
                break;
        }
        for (const i of nums) {
            i.classList.remove('active');
        }
        each.classList.add('active');
    }
}

function themeOne() {
    ball.classList.remove('one','two','three')
    ball.classList.add('one');
    manageTheme(pack,theme1)
}
function themeTwo() {
    ball.classList.remove('one','two','three')
    ball.classList.add('two');
    manageTheme(pack,theme2)
}
function themeThree() {
    ball.classList.remove('one','two','three')
    ball.classList.add('three');
    manageTheme(pack,theme3)
}


function manageTheme(nodePack,myThemeVal) {
    for (let eachElem of nodePack) {
        if(eachElem.classList.contains('set-one')) {
            eachElem.classList.remove('theme-one','theme-two','theme-three');
            eachElem.classList.add(myThemeVal[0])
        } else if (eachElem.classList.contains('set-two')) {
            eachElem.classList.remove('keypad-theme-one','keypad-theme-two','keypad-theme-three');
            eachElem.classList.add(myThemeVal[1])
        } else if (eachElem.classList.contains('set-three')) {
            eachElem.classList.remove('clear-theme-one','clear-theme-two','clear-theme-three')
            eachElem.classList.add(myThemeVal[2])
        } else if (eachElem.classList.contains('set-four')) {
            eachElem.classList.remove('eq-theme-one','eq-theme-two','eq-theme-three')
            eachElem.classList.add(myThemeVal[3])
        }
    }
}


let moveCounter = 1;
pipe.onclick = function() {
    (moveCounter > 2) ? moveCounter = 0: null;
    nums[moveCounter].click();
    moveCounter++;
}