const slider = document.querySelector(".items");

let isDown = false;
let startX = 0;
let scrollLeft = 0;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.clientX;
    scrollLeft = slider.scrollLeft;
});

document.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    e.preventDefault();

    const walk = e.clientX - startX;
    slider.scrollLeft = scrollLeft - walk;
});

document.addEventListener("mouseup", () => {
    isDown = false;
});