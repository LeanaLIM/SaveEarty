const MoreMoreMore = document.querySelector(".ToujourDansLexces");

setInterval(() => {

    let w = window.getComputedStyle(MoreMoreMore, null).width;
    w = parseInt(w.substring(0, w.length - 2));

    console.log(w);

    MoreMoreMore.style.width = `${w + 1}px`;
}, 10);