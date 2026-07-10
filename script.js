const container = document.querySelector(".container");
const cubes = document.querySelectorAll(".cube");

let activeCube = null;
let offsetX = 0;
let offsetY = 0;

// Convert cubes to absolute positioning
window.addEventListener("load", () => {

    cubes.forEach(cube => {

        const rect = cube.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        cube.style.position = "absolute";
        cube.style.left = `${rect.left - containerRect.left}px`;
        cube.style.top = `${rect.top - containerRect.top}px`;

    });

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

    // Boundary conditions
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