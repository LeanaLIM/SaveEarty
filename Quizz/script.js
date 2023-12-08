const quiz = [
    {
        "question": "Selon toi, est ce que les transports sont responsables d’un quart des émissions mondiales de gaz à effet de serre ?",
        "answers": ["Je pars en vacances en avions c’est plus écolo car la consommation correspond à celle d’une centaine de personne.", "fvrjvfJe pars en vacances en voiture, c’est moins cher, plus rapide et plus écologique que le train sur les long trajet", "Privilégier les transports écoresponsables"],
        "goodAnswer": 3,
        "badAnswer": "C'est pas la bonne réponse chef! Privilégier les transports écoresponsables, tels que la voiture électrique, les transports en commun, le vélo, la marche, et le train, constitue une solution efficace pour réduire les émissions de gaz à effet de serre liées aux déplacements. Les voitures électriques, alimentées par des batteries rechargeables, offrent une alternative à faible impact environnemental. Les transports en commun réduisent les embouteillages et favorisent une mobilité urbaine durable, tandis que le vélo, la marche, et le train contribuent à une atmosphère urbaine plus propre. Notamment, le train, en remplacement de l'avion ou de la voiture individuelle pour les trajets de vacances, présente une empreinte carbone considérablement réduite. En adoptant ces modes de transport écoresponsables, nous participons activement à la préservation de l'environnement et à la promotion d'une communauté plus durable.",
        "RightAnswer": "C'est la bonne réponse chef! Privilégier les transports écoresponsables, tels que la voiture électrique, les transports en commun, le vélo, la marche, et le train, constitue une solution efficace pour réduire les émissions de gaz à effet de serre liées aux déplacements. Les voitures électriques, alimentées par des batteries rechargeables, offrent une alternative à faible impact environnemental. Les transports en commun réduisent les embouteillages et favorisent une mobilité urbaine durable, tandis que le vélo, la marche, et le train contribuent à une atmosphère urbaine plus propre. Notamment, le train, en remplacement de l'avion ou de la voiture individuelle pour les trajets de vacances, présente une empreinte carbone considérablement réduite. En adoptant ces modes de transport écoresponsables, nous participons activement à la préservation de l'environnement et à la promotion d'une communauté plus durable."
    },
    {
        "question": "L'élevage est à l’origine de 80% des gaz à effet de serre de l’agriculture",
        "answers": ["Réduire la consommation de viande et de produits d'origine animale afin de limiter la déforestation, les émissions de gaz à effet de serre et l'utilisation intensive des ressources en eau.", "Les animaux en batterie sont un problème car ils provoquent de la déforestation en mangeant trop.", "Manger de la nourriture locale est un effort suffisant pour réduire son empreinte carbone"],
        "goodAnswer": 1,
        "badAnswer": "C'est pas la bonne réponse chef! Pour atténuer les problèmes environnementaux liés à l'alimentation, plusieurs solutions sont envisageables. Il est possible de  Privilégier les aliments locaux et de saison contribue à diminuer les émissions de CO2 associées au transport alimentaire sur de longues distances. Limiter le gaspillage alimentaire en planifiant les repas, stockant correctement les aliments et en consommant les restes permet d'économiser des ressources et de réduire les déchets. En optant pour des aliments frais et moins transformés, il est possible de diminuer l'empreinte écologique liée à la production alimentaire industrielle.",
        "RightAnswer": "C'est la bonne réponse chef! Pour atténuer les problèmes environnementaux liés à l'alimentation, plusieurs solutions sont envisageables. Il est possible de  Privilégier les aliments locaux et de saison contribue à diminuer les émissions de CO2 associées au transport alimentaire sur de longues distances. Limiter le gaspillage alimentaire en planifiant les repas, stockant correctement les aliments et en consommant les restes permet d'économiser des ressources et de réduire les déchets. En optant pour des aliments frais et moins transformés, il est possible de diminuer l'empreinte écologique liée à la production alimentaire industrielle"
    },
    {
        "question": "Selon toi, quelle est la manière la plus écologique de faire sa vaisselle ?",
        "answers": ["Faire sa vaisselle n’a aucun impact environnemental", "La consommation d’eau de chacune des méthodes est similaire dans la plupart des cas", "Utiliser un lave-vaisselle consomme plus d'eau que laver la vaisselle à la main"],
        "goodAnswer": 2,
        "badAnswer": "C'est pas la bonne réponse chef! Pour résoudre le problème du gaspillage d'eau pendant la vaisselle, il est recommandé d'adopter des pratiques plus économes. Une solution consiste à remplir un évier ou un récipient avec de l'eau savonneuse pour laver la vaisselle au lieu de laisser l'eau du robinet couler en continu. Utiliser un robinet à faible débit ou installer un dispositif d'économie d'eau peut également contribuer à réduire la consommation d'eau. En outre, le trempage préalable de la vaisselle sale peut faciliter le nettoyage, nécessitant ainsi moins d'eau pendant le lavage. Ces petites actions peuvent avoir un impact significatif sur la préservation des ressources en eau et la réduction du gaspillage.",
        "RightAnswer": "C'est la bonne réponse chef! Pour résoudre le problème du gaspillage d'eau pendant la vaisselle, il est recommandé d'adopter des pratiques plus économes. Une solution consiste à remplir un évier ou un récipient avec de l'eau savonneuse pour laver la vaisselle au lieu de laisser l'eau du robinet couler en continu. Utiliser un robinet à faible débit ou installer un dispositif d'économie d'eau peut également contribuer à réduire la consommation d'eau. En outre, le trempage préalable de la vaisselle sale peut faciliter le nettoyage, nécessitant ainsi moins d'eau pendant le lavage. Ces petites actions peuvent avoir un impact significatif sur la préservation des ressources en eau et la réduction du gaspillage."
    },
    {
        "question": "Le plastique...",
        "answers": ["Le plastique jeté en ville sera ramassé par des éboueurs ou trier dans les caniveaux alors que dans la nature il finira en mer.", "jeter du plastique en ville c’est moins grave que le jeter dans la nature", "Les plastiques jetés en ville se retrouvent souvent dans la mer par les chemins des caniveaux. D’apres france 3 aquitaine 80% des déchets 80% des déchets jetés sur la voie publique finissent dans l'océan."],
        "goodAnswer": 3,
        "badAnswer": "C'est pas la bonne réponse chef! Les plastiques que nous jetons en ville peuvent suivre un chemin inattendu. En réalité, environ 80% des déchets abandonnés dans nos rues se retrouvent dans l'océan, souvent via les caniveaux. Cette réalité souligne l'importance de ne pas sous-estimer l'impact de nos actions en ville sur nos océans. Chaque geste compte : en évitant de jeter du plastique en ville, nous contribuons à protéger nos océans et à préserver la vie marine. C'est un petit geste qui fait une grande différence pour un environnement plus sain.",
        "RightAnswer": "C'est la bonne réponse chef! Les plastiques que nous jetons en ville peuvent suivre un chemin inattendu. En réalité, environ 80% des déchets abandonnés dans nos rues se retrouvent dans l'océan, souvent via les caniveaux. Cette réalité souligne l'importance de ne pas sous-estimer l'impact de nos actions en ville sur nos océans. Chaque geste compte : en évitant de jeter du plastique en ville, nous contribuons à protéger nos océans et à préserver la vie marine. C'est un petit geste qui fait une grande différence pour un environnement plus sain."
    },
    {
        "question": "Je veux réduire ma consommation d'énergie...",
        "answers": ["en 2015 le numérique consommait environ 56 TWh, ce qui représente environ 12 % de la consommation électrique du pays et 3 % de la consommation d’énergie finale.", "L’énergie numérique ne consomme peu voir pas d’éléctricité.", "Je peux laisser mon ordinateur allumé cela ne consomme quasiment pas d’électricité"],
        "goodAnswer": 1,
        "badAnswer": "C'est pas la bonne réponse chef! Face à la hausse de la consommation d'énergie numérique, des solutions à l'échelle humaine incluent la promotion de pratiques éco-responsables, telles que l'utilisation d'appareils économes en énergie, l'extinction des appareils inutilisés, et la réduction de la luminosité des écrans. Encourager une gestion efficace des données, comme le stockage dans le cloud et la suppression régulière de fichiers inutiles, peut également contribuer à minimiser l'empreinte énergétique du numérique. La sensibilisation du public aux impacts environnementaux de la technologie et l'adoption de comportements éco-conscients dans l'utilisation quotidienne des appareils numériques sont essentielles pour atténuer l'impact croissant de la consommation d'énergie numérique sur l'environnement.",
        "RightAnswer": "C'est la bonne réponse chef! Face à la hausse de la consommation d'énergie numérique, des solutions à l'échelle humaine incluent la promotion de pratiques éco-responsables, telles que l'utilisation d'appareils économes en énergie, l'extinction des appareils inutilisés, et la réduction de la luminosité des écrans. Encourager une gestion efficace des données, comme le stockage dans le cloud et la suppression régulière de fichiers inutiles, peut également contribuer à minimiser l'empreinte énergétique du numérique. La sensibilisation du public aux impacts environnementaux de la technologie et l'adoption de comportements éco-conscients dans l'utilisation quotidienne des appareils numériques sont essentielles pour atténuer l'impact croissant de la consommation d'énergie numérique sur l'environnement."
    }
];

// Definition des variables
let questionIndex = -1;
const startBtn = document.querySelector(".start");
const quizContainer = document.querySelector(".bloc-qst");
const indicator = document.querySelector(".indicator");
const answersDiv = document.querySelector('.answer-container');
const nextBtn = document.querySelector(".next");

let answered = false;
let goodAnswers = 0;
let isIndicatorSetuped = false;
let isIndicatorActive = false;


function startQuiz() {
    const introSection = document.querySelector('.bloc-intro');
    introSection.style.display = 'none';

    const quizSection = document.querySelector('.bloc-qst');
    quizSection.style.display = 'block';

    nextQuestion();
}

startBtn.addEventListener('click', startQuiz);



function nextQuestion() {
    questionIndex++; // Increment before checking the condition

    if (questionIndex === quiz.length) {
        showFinalPage();
        return;
    }

    const numQst = document.querySelector('.numQst');
    numQst.textContent = `Question ${questionIndex + 1}`;

    const questionContainer = document.querySelector(".question");
    questionContainer.textContent = quiz[questionIndex].question;

    // Clear the answersDiv content before adding new answers
    answersDiv.innerHTML = '';

    quiz[questionIndex].answers.forEach((answer, index) => {
        const element = document.createElement("button");
        element.className = "answer";
        element.textContent = answer;

        element.addEventListener("click", () => {
            if (answered) return;

            if (index == quiz[questionIndex].goodAnswer) {
                element.classList.add("good");
                indicator.classList.add("good");
                goodAnswers++;
                answersDiv.textContent = quiz[questionIndex].RightAnswer;
            } else {
                element.classList.add("bad");
                indicator.classList.add("bad");
                answersDiv.textContent = quiz[questionIndex].badAnswer;
            }
            answered = true;

            setTimeout(() => {
                const nextBtn = document.querySelector(".next");
                nextBtn.style.display = 'block';
            }, 1100);

            // Changer en fonction du score
            changeEarty();
        });

        const answerContainer = document.querySelector(".answer-container");
        answerContainer.appendChild(element);

        if (index === 0) {
            const button = document.querySelector(".answer");
            const clientRect = button.getBoundingClientRect();
            indicator.style.setProperty("--y", clientRect.y - clientRect.height * 2);
        }
    });

    setTimeout(() => {
        if (isIndicatorSetuped) return;
        const button = document.querySelector(".answer");
        const clientRect = button.getBoundingClientRect();
        indicator.style.setProperty("--x", clientRect.x);
        indicator.style.setProperty("--width", clientRect.width);
        setTimeout(() => {
            isIndicatorSetuped = true;
        }, 400);
    }, 500);
}

function showNextBtn() {
    const nextBtn = document.querySelector(".next");

    if (answered) {
        nextBtn.style.display = 'block';
        nextBtn.addEventListener('click', onNextButtonClick);
    }
}

function onNextButtonClick() {
    answered = false;
    nextQuestion();
    const nextBtn = document.querySelector(".next");
    nextBtn.style.display = 'none';
}

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', onNextButtonClick);


// Message de fin (affichage)
function showFinalPage() {
    const page = document.createElement("div");
    page.className = "page";
    page.innerHTML = `
      <p class="score">
        Your score is ${goodAnswers}/${quiz.length}
      </p><a class="site" href="index.html"> Découvrir le site </a>
    `;
    quizContainer.appendChild(page);
}


// Incrementation du score
function changeEarty() {
    const heartContainer = document.getElementById('heart-container');

    // Supprimer tous les éléments actuels
    heartContainer.innerHTML = '';

    // Ajouter de nouveaux éléments SVG en fonction de goodAnswers
    for (let i = 0; i < goodAnswers; i++) {
        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.setAttribute("width", "50");
        svgElement.setAttribute("height", "45");
        svgElement.setAttribute("viewBox", "0 0 50 45");

        // Ajouter le chemin du cœur
        const pathElement1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathElement1.setAttribute("d", "M18.041 0.453613H9.13378V4.90722H4.68017V9.36083H0.226562V22.7217H4.68017V27.1753H9.13378V31.6289H13.5874V36.0825H18.041V40.5361H22.4946V44.9897H26.9482V40.5361H31.4018V36.0825H35.8554V31.6289H40.309V27.1753H44.7626V22.7217H49.2163V9.36083H44.7626V4.90722H40.309V0.453613H31.4018V4.90722H26.9482V9.36083H22.4946V4.90722H18.041V0.453613ZM18.041 4.90722V9.36083H22.4946V13.8144H26.9482V9.36083H31.4018V4.90722H40.309V9.36083H44.7626V22.7217H40.309V27.1753H35.8554V31.6289H31.4018V36.0825H26.9482V40.5361H22.4946V36.0825H18.041V31.6289H13.5874V27.1753H9.13378V22.7217H4.68017V9.36083H9.13378V4.90722H18.041Z");
        pathElement1.setAttribute("fill", "#3A2D14"); // Couleur du cœur

        const pathElement2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathElement2.setAttribute("d", "M17.9434 5H9.44336V9.5H4.44336V22.5H8.94336V27H13.4434V31.5H17.9434V36H22.4434V40.5H26.9434V36H31.4434V31.5H35.9434V27H40.4434V22.745H44.9434V9.5H39.9434V5H31.4434V9.5H26.9434V14H22.4434V9.5H17.9434V5Z");
        pathElement2.setAttribute("fill", "#E52421"); // Couleur du contour
        pathElement2.setAttribute("stroke", "#E52421"); // Couleur de la bordure rouge
        pathElement2.setAttribute("stroke-width", "0.5"); // Épaisseur de la bordure

        svgElement.appendChild(pathElement1);
        svgElement.appendChild(pathElement2);
        heartContainer.appendChild(svgElement);
    }
}
