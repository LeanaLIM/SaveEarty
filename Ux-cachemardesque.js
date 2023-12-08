const Chrono = 1500; 

function color(object){
    const TabColor = ["red", "blue", "green", "yellow", "pink", "purple", "rebeccapurple", "white", "cyan", "orange", "lightblue", "black"];

    document.querySelector(object).style.setProperty("--BckColor", TabColor[Math.floor(Math.random() * TabColor.length)]);
}

function layout(object) {
    const TabLayout = ["left", "center", "right"];

    document.querySelector(object).style.setProperty("--Layout", TabLayout[Math.floor(Math.random() * TabLayout.length)]);
}

function fontSize(object, max, min) {
    document.querySelector(object).style.setProperty("--Taille", `${Math.floor(Math.random() * max) + min}rem`);
}

function scale(object, max, min) {
    document.querySelector(object).style.setProperty("--Scale", (Math.random() * max) + min);
}

function Opacity() {
    let items = document.querySelectorAll(".opa");
    console.log("a")
    for(i=0; i< items.length; i++){
        let item = items[i]

        item.style.setProperty("--Opa", Math.random() * 1.1 + 0.1);
    }
}

setInterval(() => {
    color("body");
    fontSize("h1", 6, 1);
    scale(".fuite", 1.1, 0.1);
}, Chrono);

setInterval(() => {
    layout(".layout");
}, Chrono + 1000)

function fuite(){

    // let l = window.getComputedStyle(document.querySelector(".fuite"), null).left;
    // l = parseInt(l.substring(0, l.length - 2));
    // let t = window.getComputedStyle(document.querySelector(".fuite"), null).top;
    // t = parseInt(l.substring(0, l.length - 2));

    document.querySelector(".fuite").style.top = `${10 + Math.floor(Math.random() * 300)}px`;
    document.querySelector(".fuite").style.left = `${10 + Math.floor(Math.random() * 700)}px`;
}

document.querySelector(".fuite").addEventListener("mouseenter", fuite);
document.querySelector(".fuite").addEventListener("click", () => {
    console.log("click");
});