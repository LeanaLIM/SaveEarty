const res = await fetch("https://libretranslate.org/languages", {
	method: "GET",
	headers: { "Content-Type": "application/json" }
});

let langDic = await res.json();

langDic.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang.code;
    option.innerText = lang.name;
    console.log(option);
    document.querySelector("#addLanguages").appendChild(option);
});

// let alreadyAdded = ['French', 'English', 'Spanish'];


// var newTab = langDic.filter(function(objet) {
//     return !alreadyAdded.includes(objet.name);
// });

// console.log(newTab);


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