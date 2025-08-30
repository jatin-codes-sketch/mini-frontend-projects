let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = [];

const startBtn = document.querySelector(".start-quiz");
const restartBtn = document.querySelector("#restart-quiz");
const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");

const questionText = document.querySelector(".question-text");
const answerContainer = document.querySelector("#answer-container");
const currentQuestionSpan = document.querySelector("#current-question");
const scoreSpan = document.querySelector("#score");
const finalScore = document.querySelector("#final-score");
const maxScore = document.querySelector("#max-score");
const resultMessage = document.querySelector("#result-message");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  quizQuestions = getRandomQuen(questions, 5); // Pick 5 random questions
  startScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  quizScreen.classList.add("active");
  showQuestion();
}

function getRandomQuen(allQuestions, num) {
  let shuffle = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffle.slice(0, num);
}

function showQuestion() {
  resetState();
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => selectAnswer(answer.correct, button));
    answerContainer.appendChild(button);
  });

  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  scoreSpan.textContent = score;
  updateProgressBar();
}

function resetState() {
  while (answerContainer.firstChild) {
    answerContainer.removeChild(answerContainer.firstChild);
  }
}

function selectAnswer(correct, button) {
  if (correct) {
    score++;
    button.classList.add("correct");
  } else {
    button.classList.add("incorrect");
  }
  Array.from(answerContainer.children).forEach(btn => btn.disabled = true);

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 500);
}


function updateProgressBar() {
    const progressBar = document.querySelector("#progress");
  const progressPercent = ((currentQuestionIndex) / quizQuestions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
}

function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  finalScore.textContent = score;
  maxScore.textContent = quizQuestions.length;

  if (score === quizQuestions.length) {
    resultMessage.textContent = "Perfect Score! 🎉";
  } else if (score > quizQuestions.length / 2) {
    resultMessage.textContent = "Great Job!";
  } else {
    resultMessage.textContent = "Better Luck Next Time!";
  }
}

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);
