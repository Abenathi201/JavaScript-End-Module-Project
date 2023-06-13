let list = document.querySelector(".slider-section .list-items");
let items = document.querySelectorAll(".slider-section .list-items .items");
let dots = document.querySelectorAll(".slider-section .dots li");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");

let active = 0;
let length = items.length -1;

nextBtn.onclick = function() {
    if(active + 1 > items.length) {
        active = 0
    } else {
        active += 1;
    }
    reloadSlider();
}

prevBtn.onclick = function() {
    if(active < 0) {
        active = items.length
    } else {
        active -= 1;
    }
    reloadSlider();
}

let Refresh = setInterval(() => {nextBtn.click()}, 5000)

function reloadSlider() {
    let leftCheck = items[active].offsetLeft;
    list.style.left = -leftCheck + "px"

    let activeDot = document.querySelector(".slider-section .dots li.active");
    activeDot.classList.remove("active");
    dots[active].classList.add("active");
    clearInterval(reloadSlider);
}

dots.forEach((li, key) => {
    li.addEventListener('click', function (){
        active = key;
        reloadSlider()
    })
})