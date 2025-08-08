let daysItem = document.querySelector("#Days");
let hoursItem = document.querySelector("#hr");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
    let futureDate = new Date("30 July 2025"); // Set to a future date
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    // Check if the countdown has reached zero
    if (myDate >= 0) {
        let Days = Math.floor(myDate / 1000 / 60 / 60 / 24);
        let hr = Math.floor(myDate / 1000 / 60 / 60) % 24;
        let min = Math.floor(myDate / 1000 / 60) % 60;
        let sec = Math.floor(myDate / 1000) % 60;

        daysItem.innerHTML = Days;
        hoursItem.innerHTML = hr;
        minItem.innerHTML = min;
        secItem.innerHTML = sec;
    } else {
        // Set all values to zero if the target date has passed
        daysItem.innerHTML = "0";
        hoursItem.innerHTML = "0";
        minItem.innerHTML = "0";
        secItem.innerHTML = "0";
    }
};

countDown();
setInterval(countDown, 1000);


// scroll
function ScrollTopBack(){
    let ScrollTopButton = document.querySelector("#scrollUp");
    window.onscroll = function (){
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 250) {
            ScrollTopButton.classList.add('scrollActive');
            
        }
        else{
            ScrollTopButton.classList.remove('ScrollActive');
        }
    }
}
ScrollTopBack();


// navbar hide

let navbar = document.querySelectorAll('.nav-link');
let navcollaps = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click" , function(){
        navcollaps.classList.remove("show")
    } )
})