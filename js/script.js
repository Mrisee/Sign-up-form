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

function easeInOutQuart (t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
}

function replace() {
    if(!isReplaced) {
        content1.animate({
            visibility: "hidden",
            opacity: "0"
        }, {duration: 400, fill: "forwards"});
        content1Hidden.animate({
            visibility: "visible",
            opacity: "1"
        }, {duration: 200, 
            fill: "forwards"});
        content2.animate({
            visibility: "hidden",
            opacity: "0"
        }, {duration: 0, 
            delay:"240", 
            fill: "forwards"});
        content2Hidden.animate({
            visibility: "visible",
            opacity: "1"
        }, {duration: 0, 
            delay:"240", 
            fill: "forwards"});
        column1.animate({
            left: "50%"
        }, {duration: 500, 
            fill: "forwards",
            easing: "cubic-bezier(0.37, 0, 0.63, 1)"});
        column2.animate({
            right: "50%"
        }, {duration: 500, 
            fill: "forwards",
            easing: "cubic-bezier(0.37, 0, 0.63, 1)"});
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
            delay:"240", 
            fill: "forwards"});
        content2Hidden.animate({
            visibility: "hidden",
            opacity: "0"
        }, {duration: 0, 
            delay:"240", 
            fill: "forwards"});
        column1.animate({
            left: "0px"
        }, {duration: 500, 
            fill: "forwards",
            easing: "cubic-bezier(0.37, 0, 0.63, 1)"});
        column2.animate({
            right: "0%"
        }, {duration: 500, 
            fill: "forwards",
            easing: "cubic-bezier(0.37, 0, 0.63, 1)"});
        isReplaced = false;
    }
    
};

