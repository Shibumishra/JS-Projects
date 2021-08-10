var quizData = [
  {
    question: "Q1: How old is Florin?",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    correct: "c",
  },
  {
    question: "Q1: What is the most used programming language in 2021?",
    a: "java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "Q1: Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Tvan Saldano",
    d: "Mithai Andrei",
    correct: "b",
  },
  {
    question: "Q1: What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals MOtorboats",
    correct: "a",
  },
];

var quiz = document.getElementById("quiz");
var answersEls = document.querySelectorAll(".answer");

var questionEl = document.getElementById("Question");
var a_text = document.getElementById("text-a");
var b_text = document.getElementById("text-b");
var c_text = document.getElementById("text-c");
var d_text = document.getElementById("text-d");
var submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
  deselectAnswers();
  var currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  // currentQuestion++
}

function getSelected() {
  var answer = undefined;
  answersEls.forEach((answersEl) => {
    if (answersEl.checked) {
      answer = answersEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answersEl) => {
    answersEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see the answer
  var answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h3>You answered correctly at 
      ${score}/${quizData.length} questions.</h3> 
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
