
//definition des questions
const quiz = [
    {
      question: "Question 1",
      answers: ["answer1", "answer2", "answer3"],
      goodAnswer: 0
    },
    {
      question: "Question 2",
      answers: ["answer1", "answer2", "answer3"],
      goodAnswer: 1
    },
    {
        question: "Question 3",
        answers: ["answer1", "answer2", "answer3"],
        goodAnswer: 1
    },
    {
        question: "Question 4",
        answers: ["answer1", "answer2", "answer3"],
        goodAnswer: 1
    },
    {
        question: "Question 5",
        answers: ["answer1", "answer2", "answer3"],
        goodAnswer: 1
    }
  ];

  //definition des variables
  let questionIndex = -1;
  const startBtn = document.querySelector(".start-button");
  const quizContainer = document.querySelector(".quiz-container");
  const indicator = document.querySelector(".indicator");


  let answered = false;
  let goodAnswers = 3; 
  let isIndicatorSetuped = false;
  let isIndicatorActive = false;
  
//fonction de passage de page
  startBtn.addEventListener("click", () => {
    hiddenPage();
    nextQuestion();
  });

  function hiddenPage() {
    isIndicatorActive = false;
    indicator.classList.add("hidden");
    const page = document.querySelector(".page");
    page.classList.add("hidden");
    setTimeout(() => page.remove(), 500);
  }


  //passer à la question suivante
  function nextQuestion() {
    questionIndex++;
    if (questionIndex === quiz.length) {
      showFinalPage();
      return;
    }

//definition des elements de la page

    const page = document.createElement("div");
    page.className = "page";
    quizContainer.appendChild(page);
    const questionContainer = document.createElement("h4");
    questionContainer.className = "question";
    page.appendChild(questionContainer);
    const answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    page.appendChild(answerContainer);
    answered = false;
    questionContainer.textContent = quiz[questionIndex].question;
    let body = document.querySelector("body");
    
    quiz[questionIndex].answers.forEach((answer, index) => {
      const element = document.createElement("button");
      element.className = "answer";
      element.textContent = answer;

      
//si la valeur de goodAnswer est supérieur à ... , afficher un message 

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

        // Ajouter le contour du cœur
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

    element.addEventListener("click", () => {
        if (answered) return;
        if (index == quiz[questionIndex].goodAnswer) {
          element.classList.add("good");
          indicator.classList.add("good");
          goodAnswers++;
        } else {
          element.classList.add("bad");
          indicator.classList.add("bad");
          goodAnswers--;
        }
        answered = true;
        setTimeout(() => {
          showNextBtn(page);
        }, 1100);

        //changer en fonction du score
        changeEarty();
        console.log(goodAnswers);
      });

      //anilmation du curseur
      indicator.className = "indicator hidden";
      answerContainer.appendChild(element);
      indicator.style.setProperty("--height", element.clientHeight);
      setTimeout(() => {
        isIndicatorActive = true;
      }, 500);
      element.addEventListener("mousemove", () => {
        if (answered) return;
        if (!isIndicatorActive || !isIndicatorSetuped) return;
        indicator.className = "indicator";
        const clientRect = element.getBoundingClientRect();
        indicator.style.setProperty("--y", clientRect.y);
        indicator.style.setProperty("--x", clientRect.x);
      });
    });


    const button = document.querySelector(".answer");
    const clientRect = button.getBoundingClientRect();
    indicator.style.setProperty("--y", clientRect.y - clientRect.height * 2);
    console.log(clientRect.y);
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

//création du bouton next
  function showNextBtn(body) {
    const element = document.createElement("button");
    element.className = "next-button";
    element.addEventListener("click", () => {
      hiddenPage();
      nextQuestion();
    });
    element.textContent = "next";
    body.appendChild(element);
  }

//message de fin (affichage)
  function showFinalPage() {
    const page = document.createElement("div");
    page.className = "page";
    page.innerHTML = `
      <h1 class="question">
      Congratulations 🎉!!!
      </h1>
      <p class="score">
        You score is ${goodAnswers}/${quiz.length}
      </p>
    `;
    quizContainer.appendChild(page);
  }


