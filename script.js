const container = document.querySelector(".container");
const cubes = document.querySelectorAll(".cube");

let activeCube = null;
let offsetX = 0;
let offsetY = 0;

// Arrange cubes in a 3 × 3 grid
cubes.forEach((cube, index) => {

    const row = Math.floor(index / 3);
    const col = index % 3;

    cube.style.left = `${30 + col * 180}px`;
    cube.style.top = `${30 + row * 180}px`;

});

cubes.forEach(cube => {

    cube.addEventListener("mousedown", (e) => {

        activeCube = cube;

        cube.classList.add("dragging");

        const rect = cube.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

    });

});

document.addEventListener("mousemove", (e) => {

    if (!activeCube) return;

    const containerRect = container.getBoundingClientRect();

    let left = e.clientX - containerRect.left - offsetX;
    let top = e.clientY - containerRect.top - offsetY;

    // Keep cube inside container
    left = Math.max(
        0,
        Math.min(left, container.clientWidth - activeCube.offsetWidth)
    );

    top = Math.max(
        0,
        Math.min(top, container.clientHeight - activeCube.offsetHeight)
    );

    activeCube.style.left = left + "px";
    activeCube.style.top = top + "px";

});

document.addEventListener("mouseup", () => {

    if (!activeCube) return;

    activeCube.classList.remove("dragging");

    activeCube = null;

});