import langues from "./langue/langue.json" assert { type: "json" };

// Appel de l'API pour récupérer les langues disponibles
const res = await fetch("https://libretranslate.org/languages", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
});

// récupération et attribution des langues
let langDic = await res.json();

// Ajout des langues dans le select
langDic.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang.code;
    option.innerText = lang.name;
    document.querySelector("#Languages").appendChild(option);
});

// Tableau pour stocker les noms de langues déjà présent dans le JSON
let nomsLangues = [];

// Parcourir le JSON et ajouter les noms de langues au tableau
langues.forEach(function (item) {
    nomsLangues.push(item.Langue);
});

// Filtre pour récupérer les langues qui ne sont pas dans le tableau
let newTab = langDic.filter(function (objet) {
    return !nomsLangues.includes(objet.name);
});

console.log(newTab);

$("#Languages").change(function () {
    // Récupérer la valeur sélectionnée
    var valeurSelectionnee = $(this).val();

    var estDansLeTableau = newTab.some(function(objet) {
        return objet.code === valeurSelectionnee;
    });

    if (estDansLeTableau) {
        console.log("La valeur sélectionnée est dans le tableau d'objets.");
        // Faire quelque chose si la valeur est dans le tableau
    } else {
        console.log("La valeur sélectionnée n'est pas dans le tableau d'objets.");
        // Faire quelque chose si la valeur n'est pas dans le tableau
    }

});


// const res = await fetch("https://libretranslate.org/translate", {
// 	method: "POST",
// 	body: JSON.stringify({
// 		q: "Je suis un homme",
// 		source: "fr",
// 		target: "en",
// 		format: "text",
// 		api_key: ""
// 	}),
// 	headers: { "Content-Type": "application/json" }
// });

// console.log(await res.json());