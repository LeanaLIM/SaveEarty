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

// $("#Languages").val("fr");
$("#Languages option[value='fr']").prop("selected", true);

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

// var langueStockee = obtenirLangue();
// if (langueStockee) {
//     valeurSelectionnee = langueStockee;

// }



$("#Languages").change(function () {
    // Récupérer la valeur sélectionnée
    let valeurSelectionnee = $(this).val();

    let estDansLeTableau = newTab.some(function (objet) {
        return objet.code === valeurSelectionnee;
    });

    // Récupérer le code de la langue sélectionnée
    const selectedLangue = event.target.value;

    if (estDansLeTableau) {
        console.log("La valeur sélectionnée est dans le tableau d'objets.");
        // Faire quelque chose si la valeur est dans le tableau

        const frenchText = langues.find((element) => element.code === "fr");
        let allFrenchText = frenchText.text
        let allKeys = []
        let translatedText = ""

        for (let cle in allFrenchText) {
            if (allFrenchText.hasOwnProperty(cle)) {
                // $("#" + cle).html(allText[cle]);
                allKeys.push(cle)
                translatedText = translatedText + allFrenchText[cle] + "_";
            }
        }

        async function fetchData() {
            const res = await fetch("https://libretranslate.org/translate", {
                method: "POST",
                body: JSON.stringify({
                    q: translatedText,
                    source: "fr",
                    target: selectedLangue,
                    format: "text",
                    api_key: ""
                }),
                headers: { "Content-Type": "application/json" }
            });

            translatedText = await res.json();

            translatedText = translatedText.translatedText.split("_");
            translatedText.pop();

            // Associer les deux tableaux en un tableau d'objets
            var tableauObjets = translatedText.map(function (cle, index) {
                var objet = {};
                objet[allKeys[index]] = cle;
                return objet;
            });

            var tableauSansSlash = tableauObjets.map(function (objet) {
                var nouvelObjet = {};
                for (var cle in objet) {
                    if (objet.hasOwnProperty(cle)) {
                        nouvelObjet[cle] = objet[cle].replace(/\//g, ""); // Remplace tous les "/"
                    }
                }
                return nouvelObjet;
            });

            var tableauRegroupe = [{}];

            for (var i = 0; i < tableauSansSlash.length; i++) {
                var objetCourant = tableauSansSlash[i];

                for (var cle in objetCourant) {
                    if (objetCourant.hasOwnProperty(cle)) {
                        tableauRegroupe[0][cle] = objetCourant[cle];
                    }
                }
            }

            for (let cle in tableauRegroupe[0]) {
                if (tableauRegroupe[0].hasOwnProperty(cle)) {
                    $("#" + cle).html(tableauRegroupe[0][cle]);
                }

            }

            var langueFilter = langDic.filter(function (langue) {
                return langue.code === selectedLangue;
            });

            langueFilter = langueFilter[0].name

            // Ajouter les nouvelles langues dans le JSON
            let newLangue = {
                "Langue": langueFilter,
                "code": selectedLangue,
                "text": tableauRegroupe[0]
            }

            async function ajouteLangue() {
                const response = await fetch("api.php?lang=" + JSON.stringify(newLangue));
                const result = await response.text();
            }

            ajouteLangue();
            definirLangue(selectedLangue)


        }

        // Appeler la fonction asynchrone
        fetchData();

    } else {
        // La valeur sélectionnée n'est pas dans le tableau d'objets

        // Récupérer les données de la langue sélectionnée à partie de son code
        const selectedData = langues.find((element) => element.code === selectedLangue);

        definirLangue(selectedLangue)

        // Si selectedData n'est pas null
        if (selectedData) {
            // Récupérer le texte de la langue sélectionnée
            let allText = selectedData.text

            // Parcourir le JSON text et remplacer les valeurs des id par les valeurs du JSON
            for (let cle in allText) {
                if (allText.hasOwnProperty(cle)) {
                    $("#" + cle).html(allText[cle]);
                }
            }
        }
    }

});

function definirLangue(langue) {
    Cookies.set('langue', langue, { expires: 365 }); // Le cookie expire après 365 jours
}

function obtenirLangue() {
    return Cookies.get('langue');
}