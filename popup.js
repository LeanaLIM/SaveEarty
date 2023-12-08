const TabAlert = ["Holala il fait chaud ici !", "Salut les d'jeunz !", "On se sent un peu golémique ouuuu ?", "Il est 6h du mat' hein ...."];

setInterval(() => {
    let alea = Math.floor(Math.random() * 3);

    for (let index = 0; index <= alea; index++) {
        alert(TabAlert[Math.floor(Math.random() * 4)]);
        
    }

}, 10000);