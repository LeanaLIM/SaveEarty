import Langues from './langue1.json' assert { type: "json" };

let CurrentLangue = Langues;
let ArrayLanguages = [];
const h1Element = document.getElementById('h1');
const pElement = document.getElementById('p');


//push dans un tableau toutes les langues répertoriées dans le fichier langue1.json
CurrentLangue.forEach((element) => {
    ArrayLanguages.push(element.Langue);
});
/* OU =======================
const ArrayLanguages = Langues.map((element) => element.Langue); */

/* console.log(ArrayLanguages); */

//ajouter les langues dans le select
const select = document.getElementById('select-languages');
ArrayLanguages.forEach((langue) => {
    const option = document.createElement('option');
    option.text = langue;
    select.add(option);
});

//afficher la langue sélectionnée dans la console lorsque l'on clique sur le bouton
select.addEventListener('change', (event) => {
    const selectedLangue = event.target.value;
    const selectedData = Langues.find((element) => element.Langue === selectedLangue);

    // Mettre à jour le contenu de h1 et p
    if (selectedData) {
        h1Element.textContent = selectedData.h1;
        pElement.textContent = selectedData.p;
    }
});

