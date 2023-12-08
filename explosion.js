window.addEventListener('click', (e) => {explosion(e)});

function explosion(e) {
    console.log(e);
    let explo = document.querySelector("#explosion");
    let x = e.pageX;
    let y = e.pageY;

    explo.style.visibility = "visible";
    explo.style.left = `${x}px`;
    explo.style.top = `${y}px`;

    setTimeout(() => {
        explo.style.visibility = "hidden";
    }, 1500);
}