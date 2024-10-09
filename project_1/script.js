const questionBox = document.querySelector(".question");
const questionTitle = questionBox.querySelector("h1");
const answerBox = document.querySelector(".answers");
const answerOne = questionBox.querySelector("#ans1");
const answerTwo = questionBox.querySelector("#ans2");
const answerThree = questionBox.querySelector("#ans3");
const answerFour = questionBox.querySelector("#ans4");
const next = document.querySelector("#next");
const conf = document.querySelector("#confirm");
const start = document.querySelector("#start");
let selected = false;
let currentQuestion;
let selection;

questionBox.classList.add("hide");
next.classList.add("hide");
conf.classList.add("hide");

function startQuiz() {
  answerBox.classList.remove("hide");
  questionBox.classList.remove("hide");
  start.classList.add("hide");
  next.classList.add("hide");
  qShuffle = questions.sort(() => Math.random() - 0.5);
  qIndex = 0;
  nextQuestion();
}

function nextQuestion() {
  if (next.classList.contains("wrong")) {
    next.classList.remove("wrong");
    qIndex = 0;
    showQuestion(qShuffle[qIndex]);
    qIndex++;
  } else {
    if (qIndex > 4) {
      answerBox.classList.add("hide");
      questionTitle.innerText = "You finished the quiz!";
      next.classList.add("hide");
      conf.classList.add("correct");
      conf.classList.remove("hide");
      conf.innerText = "Restart";
    } else {
      showQuestion(qShuffle[qIndex]);
      qIndex++;
    }
  }
  answerOne.classList.remove("wrong");
  answerOne.classList.remove("correct");
  answerTwo.classList.remove("wrong");
  answerTwo.classList.remove("correct");
  answerThree.classList.remove("wrong");
  answerThree.classList.remove("correct");
  answerFour.classList.remove("wrong");
  answerFour.classList.remove("correct");
  next.classList.add("hide");
  next.innerText = "Next";
}

function showQuestion(question) {
  questionTitle.innerText = question.qu;
  currentQuestion = question;
  aShuffle = question.an.sort(() => Math.random() - 0.5);
  if (answerOne.classList.contains("hide")) {
    answerOne.classList.remove("hide");
  }
  if (answerTwo.classList.contains("hide")) {
    answerTwo.classList.remove("hide");
  }
  if (question.length > 3) {
    answerOne.innerText = question.an[0].text;
    answerTwo.innerText = question.an[1].text;
    answerThree.innerText = question.an[2].text;
    answerFour.innerText = question.an[3].text;
    if (answerFour.classList.contains("hide")) {
      answerFour.classList.remove("hide");
    }
    if (answerThree.classList.contains("hide")) {
      answerThree.classList.remove("hide");
    }
  } else if (question.length > 2) {
    answerOne.innerText = question.an[0].text;
    answerTwo.innerText = question.an[1].text;
    answerThree.innerText = question.an[2].text;
    if (!answerFour.classList.contains("hide")) {
      answerFour.classList.add("hide");
    }
    if (answerThree.classList.contains("hide")) {
      answerThree.classList.remove("hide");
    }
  } else {
    answerOne.innerText = question.an[0].text;
    answerTwo.innerText = question.an[1].text;
    if (!answerThree.classList.contains("hide")) {
      answerThree.classList.add("hide");
    }
    if (!answerFour.classList.contains("hide")) {
      answerFour.classList.add("hide");
    }
  }
}

function sel1() {
  if (
    !answerOne.classList.contains("wrong") &&
    !answerOne.classList.contains("correct")
  ) {
    if (!answerOne.classList.contains("select")) {
      answerOne.classList.add("select");
      selection = 0;
    }
    if (answerTwo.classList.contains("select")) {
      answerTwo.classList.remove("select");
    }
    if (answerThree.classList.contains("select")) {
      answerThree.classList.remove("select");
    }
    if (answerFour.classList.contains("select")) {
      answerFour.classList.remove("select");
    }
    if (conf.classList.contains("hide")) {
      conf.classList.remove("hide");
    }
  }
}
function sel2() {
  if (
    !answerOne.classList.contains("wrong") &&
    !answerOne.classList.contains("correct")
  ) {
    if (!answerTwo.classList.contains("select")) {
      answerTwo.classList.add("select");
      selection = 1;
    }
    if (answerOne.classList.contains("select")) {
      answerOne.classList.remove("select");
    }
    if (answerThree.classList.contains("select")) {
      answerThree.classList.remove("select");
    }
    if (answerFour.classList.contains("select")) {
      answerFour.classList.remove("select");
    }
    if (conf.classList.contains("hide")) {
      conf.classList.remove("hide");
    }
  }
}
function sel3() {
  if (
    !answerOne.classList.contains("wrong") &&
    !answerOne.classList.contains("correct")
  ) {
    if (!answerThree.classList.contains("select")) {
      answerThree.classList.add("select");
      selection = 2;
    }
    if (answerTwo.classList.contains("select")) {
      answerTwo.classList.remove("select");
    }
    if (answerOne.classList.contains("select")) {
      answerOne.classList.remove("select");
    }
    if (answerFour.classList.contains("select")) {
      answerFour.classList.remove("select");
    }
    if (conf.classList.contains("hide")) {
      conf.classList.remove("hide");
    }
  }
}
function sel4() {
  if (
    !answerOne.classList.contains("wrong") &&
    !answerOne.classList.contains("correct")
  ) {
    if (!answerFour.classList.contains("select")) {
      answerFour.classList.add("select");
      selection = 3;
    }
    if (answerTwo.classList.contains("select")) {
      answerTwo.classList.remove("select");
    }
    if (answerThree.classList.contains("select")) {
      answerThree.classList.remove("select");
    }
    if (answerOne.classList.contains("select")) {
      answerOne.classList.remove("select");
    }
    if (conf.classList.contains("hide")) {
      conf.classList.remove("hide");
    }
  }
}

function confr() {
  if (conf.classList.contains("correct")) {
    conf.innerText = "Confirm";
    conf.classList.remove("correct");
    startQuiz();
  } else {
    checkCorrect(answerOne, 0);
    checkCorrect(answerTwo, 1);
    if (currentQuestion.length > 2) {
      checkCorrect(answerThree, 2);
    }
    if (currentQuestion.length > 3) {
      checkCorrect(answerFour, 3);
    }

    if (!currentQuestion.an[selection].correct) {
      next.classList.add("wrong");
      next.innerText = "Try Again";
    }
    conf.classList.add("hide");
    next.classList.remove("hide");
  }
}

function checkCorrect(button, pos) {
  if (currentQuestion.an[pos].correct) {
    button.classList.add("correct");
    button.classList.remove("wrong");
  } else {
    button;
    button.classList.add("wrong");
    button.classList.remove("correct");
  }
}

questions = [
  {
    qu: 'The Minecraft mob "creeper" was presumably mistakenly made from what other mob?',
    an: [
      { text: "Cow", correct: false },
      { text: "Sheep", correct: false },
      { text: "Pig", correct: true },
      { text: "Zombie", correct: false },
    ],
    length: 4,
  },
  {
    qu: "What is 2^[5-(8/4)]+7*3?",
    an: [
      { text: "32", correct: false },
      { text: "29", correct: true },
      { text: "45", correct: false },
      { text: "21", correct: false },
    ],
    length: 4,
  },
  {
    qu: "Is this statement false?",
    an: [
      { text: "Yes", correct: true },
      { text: "No", correct: true },
    ],
    length: 2,
  },
  {
    qu: 'What level first introduced the mini portal into the game "Geometry Dash"?',
    an: [
      { text: "Xstep", correct: false },
      { text: "Time Machine", correct: false },
      { text: "Theory of Everything", correct: false },
      { text: "Clutterfunk", correct: true },
    ],
    length: 4,
  },
  {
    qu: '"K" is the 10th letter of the English alphabet',
    an: [
      { text: "true", correct: false },
      { text: "false", correct: true },
    ],
    length: 2,
  },
];
