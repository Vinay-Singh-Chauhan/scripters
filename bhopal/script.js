const container = document.querySelector(".card-container");

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
    isDown = false;
});

container.addEventListener("mouseup", () => {
    isDown = false;
});

container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the multiplier for faster/slower scrolling
    container.scrollLeft = scrollLeft - walk;
});

const container2 = document.querySelector(".card-container2");

let isDown1 = false;
let startX1;
let scrollLeft3;

container2.addEventListener("mousedown", (e) => {
    // console.log("heere")
    isDown1 = true;
    startX1 = e.pageX - container2.offsetLeft;
    scrollLeft3 = container2.scrollLeft;
});

container2.addEventListener("mouseleave", () => {
    isDown1 = false;
});

container2.addEventListener("mouseup", () => {
    isDown1 = false;
});

container2.addEventListener("mousemove", (e) => {
    if (!isDown1) return;
    e.preventDefault();
    const x = e.pageX - container2.offsetLeft;
    const walk = (x - startX1) * 2; // Adjust the multiplier for faster/slower scrolling
    container2.scrollLeft = scrollLeft3 - walk;
});
