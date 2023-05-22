
let numbers = document.querySelectorAll(".nums .num");
let section3 = document.querySelector(".three");
let start = false; // function baqa malkhdmatch


window.onscroll = function () {
    if (window.scrollY >= section3.offsetTop - 130) {
        if (!start) {  // qlna lih ila baqi makhdmatch l function dir lina hadchi
            numbers.forEach((num) => startCounting(num));
        }
        start = true;  // bach maykmlch counting foq mn goal by scrolling
    }
};

function startCounting(el) {
    let goal = el.dataset.goal;  // jbna l value tae goal 
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
