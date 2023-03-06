const progress = document.querySelector("#progress");
const circles = document.querySelectorAll(".circle")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const image = document.querySelector("#image")

let currentActive = 1;

const images = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/201",
    "https://picsum.photos/300/199",
    "https://picsum.photos/301/200"
];

image.src = images[0]

next.addEventListener("click", () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update();
});

prev.addEventListener("click", () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1
    }

    update();
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })
    const actives = document.querySelectorAll(".active");
    const lineWidth = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    if (currentActive == 1) {
        prev.disabled = true
    } else {
        prev.disabled = false
    }

    if (currentActive == circles.length) {
        next.disabled = true
    } else {
        next.disabled = false
    }

    progress.style.width = lineWidth
    image.src = images[currentActive - 1]
}