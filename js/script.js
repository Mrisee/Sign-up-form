let isReplaced = false;
const column1 = document.querySelector(".column1");
const column2 = document.querySelector(".column2");
const content1 = document.querySelector(".column1__content");
const content1Hidden = document.querySelector(".column1__hide-content");
const content2 = document.querySelector(".column2__content");
const content2Hidden = document.querySelector(".column2__hide-content");
var button1 = document.querySelector(".column1__button");
var button1Hidden = document.querySelector(".column1__hide-button");
var button2 = document.querySelector(".column2__button");
var button2Hidden = document.querySelector(".column2__hide-button");

button1.addEventListener("click", replace);
button1Hidden.addEventListener("click", replace);

function replace() {
    if(!isReplaced) {
        content1.animate({
            visibility: "hidden",
            opacity: "0"
        }, {duration: 200, fill: "forwards"});
        content1Hidden.animate({
            visibility: "visible",
            opacity: "1"
        }, {duration: 200, 
            fill: "forwards"});
        content2.animate({
            visibility: "hidden",
            opacity: "0"
        }, {duration: 0, 
            delay:"270", 
            fill: "forwards"});
        content2Hidden.animate({
            visibility: "visible",
            opacity: "1"
        }, {duration: 0, 
            delay:"270", 
            fill: "forwards"});
        column1.animate({
            left: "50%"
        }, {duration: 600, 
            fill: "forwards"});
        column2.animate({
            right: "50%"
        }, {duration: 600, 
            fill: "forwards"});
        isReplaced = true;
        }
    else if (isReplaced) {
        content1.animate({
            visibility: "visible",
            opacity: "1"
        }, {duration: 200, 
            fill: "forwards"});
        content1Hidden.animate({
            visibility: "hidden",
            opacity: "0"
        }, {duration: 200, 
            fill: "forwards"});
        content2.animate({
            visibility: "visible",
            opacity: "1"
        }, {duration: 0, 
            delay:"270", 
            fill: "forwards"});
        content2Hidden.animate({
            visibility: "hidden",
            opacity: "0"
        }, {duration: 0, 
            delay:"270", 
            fill: "forwards"});
        column1.animate({
            left: "0px"
        }, {duration: 600, 
            fill: "forwards"});
        column2.animate({
            right: "0%"
        }, {duration: 600, 
            fill: "forwards"});
        isReplaced = false;
    }
    
};

