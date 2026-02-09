//stores user score
let score = 0;
let currentQuestionIndex = 0;
let timeLeft = 10;
let timerId = null;

// Quiz questions data
const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "define", "int", "string"],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Which data type is NOT in JavaScript?",
    options: ["Number", "Boolean", "Float", "Undefined"],
    correctAnswer: 2
  }
];

//Dom Elements
const start1 = document.getElementById('start-btn');
const questionE1 = document.getElementById('question');
const optionsE1 = document.getElementById('options');
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");

//start Quiz fn
function startQuiz(){
    clearInterval(timerId)

     score = 0;
     currentQuestionIndex = 0;
    
    questionE1.classList.remove("hidden");
    optionsE1.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
    timerEl.classList.remove("hidden");
    scoreEl.classList.remove("hidden");

    start1.classList.add("hidden");

    scoreEl.textContent = "Score: 0";
    
    loadQuestion();
}

start1.addEventListener('click',startQuiz)

//Fn to Load Q&A
function loadQuestion() {
    nextBtn.disabled = true;

  const currentQuestion = questions[currentQuestionIndex];

  questionE1.textContent = currentQuestion.question;
  optionsE1.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
  const button = document.createElement("button");
  button.textContent = option;

  button.addEventListener("click", function () {
    checkAnswer(index);
  });

  optionsE1.appendChild(button);
});
   
startTimer();

}


//tiner fn
function startTimer() {
  clearInterval(timerId); // clear old timer
  timeLeft = 10;
  timerEl.textContent = `Time left: ${timeLeft}s`;

  timerId = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time left: ${timeLeft}s`;

    if (timeLeft === 0) {
      clearInterval(timerId);
      nextQuestion(); // auto move to next question
    }
  }, 1000);
}


//Checking answer 
function checkAnswer(selectedIndex) {
     nextBtn.disabled = false;
    clearInterval(timerId);
  const correctIndex = questions[currentQuestionIndex].correctAnswer;

  if (selectedIndex === correctIndex) {
    score++;
    scoreEl.textContent = `Score: ${score}`;
  } 

  console.log("Current Score:", score);

  // Disable all buttons after one click
  const buttons = optionsE1.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = true));
}


//next question fn
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } 
  else {
    endQuiz();
  }
}


nextBtn.addEventListener("click", nextQuestion);

//endQuiz fn
function endQuiz() {
  clearInterval(timerId);

  questionE1.textContent = "Quiz Completed";
  optionsE1.innerHTML = "";
  timerEl.textContent = "";
  nextBtn.style.display = "none";

  scoreEl.textContent = `Final Score: ${score} / ${questions.length}`;
}









