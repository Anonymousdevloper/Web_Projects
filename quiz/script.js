const quizData = [
  {
    question: "Who is the Prime Minister of India?",
    a: "Rahul Gandhi",
    b: "Lalu Yadav",
    c: "Narendra Modi",
    d: "yogi Adaditaya Nath",
    correct: "c",
  },
  {
    question: "What is the most used programing language in 2022?",
    a: "Java",
    b: "Python",
    c: "JavaScript",
    d: "c++",
    correct: "c",
  },
  {
    question: "what is HTML stand for?",
    a: "Hypertext Markup language",
    b: "Hightime most use language",
    c: "Hypethe mark language",
    d: "All of the above",
    correct: "a",
  },
  {
    question: "In what years does the python language launch?",
    a: "1995",
    b: "2005",
    c: "2015",
    d: "1991",
  },
];

const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  const answerE1s = document.querySelectorAll(".answer");

  let answer = undefined;

  answerE1s.forEach((answerE1) => {
    if (answerE1.checked) {
      answer = answerE1.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      alert("You finshed! ");
    }
  }
});
