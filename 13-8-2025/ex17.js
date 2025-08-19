const questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Chennai", "Kolkata", "Gandhinagar"],
    answer: "Delhi"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", " Indian Ocean"," Arctic Ocean","Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "What is the capital of France?",
    options: [
      "Berlin",
      "Paris",
      "Rome",
      "london"
    ],
    answer: "Paris"
  }
];
let currentQuestionIndex = 0;
let scoreValue = 0;
const question = document.getElementById("question");
const options = document.getElementById("options");
const feedback = document.getElementById("feedback");
const score = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

function showQuestion() {
  const q = questions[currentQuestionIndex];
  question.textContent = q.question;
  options.innerHTML = "";
  feedback.textContent = "";
  nextBtn.disabled = true;
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(option);
    options.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const correct = questions[currentQuestionIndex].answer;
  if (selected === correct) {
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
    scoreValue++;
  } else {
    feedback.textContent = `Wrong! Correct: ${correct}`;
    feedback.style.color = "red";
  }
  Array.from(options.children).forEach(btn => btn.disabled = true);
  score.textContent = `Score: ${scoreValue}`;
  nextBtn.disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    question.textContent = "Quiz Finished!";
    options.innerHTML = "";
    feedback.textContent = `Final Score: ${scoreValue}/${questions.length}`;
    nextBtn.disabled = true;
  }
}

showQuestion();