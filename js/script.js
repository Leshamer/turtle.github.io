"use strict";
const goup = document.querySelector('.goup');
const body = document.querySelector('body');
const absolute = document.querySelector('.absolute');
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
    anchor.addEventListener("click", function (event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
}


window.onscroll = function(e){
    const scroled = window.pageYOffset;
    if (scroled >= 300){goup.style.opacity = 1;}
    else {goup.style.opacity = 0;}
}
