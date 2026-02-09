// ================= IMPORTS =================
import { questions } from "./src/data/questions.js";
import { createTimer } from "./src/utils/timer.js";
import { calculateScore } from "./src/utils/score.js";

// ================= STATE =================
let score = 0;
let currentQuestionIndex = 0;
let timer = null;

// ================= DOM ELEMENTS =================
const startBtn = document.getElementById("start-btn");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");

// ================= START QUIZ =================
function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;

  startBtn.classList.add("hidden");
  optionsEl.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
  timerEl.classList.remove("hidden");
  scoreEl.classList.remove("hidden");

  scoreEl.textContent = "Score: 0";

  loadQuestion();
}

startBtn.addEventListener("click", startQuiz);

// ================= LOAD QUESTION =================
function loadQuestion() {
  nextBtn.disabled = true;

  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;

    button.addEventListener("click", () => checkAnswer(index));
    optionsEl.appendChild(button);
  });

  // Stop old timer
  if (timer) {
    timer.stop();
  }

  // Create new timer using utility
  timer = createTimer(
    10,
    (time) => {
      timerEl.textContent = `Time left: ${time}s`;
    },
    () => {
      nextBtn.disabled = false;
      nextQuestion();
    }
  );

  timer.start();
}

// ================= CHECK ANSWER =================
function checkAnswer(selectedIndex) {
  timer.stop();

  const correctIndex = questions[currentQuestionIndex].correctAnswer;
  const isCorrect = selectedIndex === correctIndex;

  score = calculateScore(score, isCorrect);
  scoreEl.textContent = `Score: ${score}`;

  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = true));

  nextBtn.disabled = false;
}

// ================= NEXT QUESTION =================
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

nextBtn.addEventListener("click", nextQuestion);

// ================= END QUIZ =================
function endQuiz() {
  if (timer) {
    timer.stop();
  }

  questionEl.textContent = "Quiz Completed 🎉";
  optionsEl.innerHTML = "";

  optionsEl.classList.add("hidden");
  timerEl.classList.add("hidden");
  nextBtn.classList.add("hidden");

  scoreEl.textContent = `Final Score: ${score} / ${questions.length}`;
}
