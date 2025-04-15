const flashcards = [
  {
    question: "What is solar energy?",
    answer: "Energy from the sun converted into thermal or electrical power."
  },
  {
    question: "What is the photoelectric effect?",
    answer: "Emission of electrons from material when light hits it."
  },
  {
    question: "What is a photovoltaic cell?",
    answer: "Device that converts sunlight into electricity."
  },
  {
    question: "What are solar panels made of?",
    answer: "Mostly silicon-based semiconductor materials."
  },
  {
    question: "What is net metering?",
    answer: "System that credits solar users for energy fed to the grid."
  },
  {
    question: "What limits solar panel efficiency?",
    answer: "Weather, dust, angle, material properties."
  },
  {
    question: "What is solar thermal energy?",
    answer: "Use of sunlight to produce heat."
  },
  {
    question: "What are smart grids?",
    answer: "Modern grids integrating renewable sources and digital tech."
  },
  {
    question: "Name one application of solar energy.",
    answer: "Water heating, desalination, or powering sensors."
  },
  {
    question: "Why is solar energy sustainable?",
    answer: "It’s renewable, abundant, and non-polluting."
  }
];

function renderFlashcards() {
  const container = document.querySelector('.flashcard-container');
  container.innerHTML = '';

  flashcards.forEach(card => {
    const cardHTML = `
      <div class="flashcard">
        <div class="flashcard-inner">
          <div class="flashcard-front">${card.question}</div>
          <div class="flashcard-back">${card.answer}</div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', cardHTML);
  });
}

document.addEventListener('DOMContentLoaded', renderFlashcards);
const quizQuestions = [
  {
    question: "Which device converts solar energy directly into electricity?",
    options: ["Solar heater", "Photovoltaic cell", "Thermal collector", "Inverter"],
    correct: 1
  },
  {
    question: "What is the main material used in most solar panels?",
    options: ["Aluminum", "Copper", "Silicon", "Graphene"],
    correct: 2
  },
  {
    question: "What is the photovoltaic effect?",
    options: [
      "Heat transfer from sun to earth",
      "Conversion of solar heat into light",
      "Generation of voltage when exposed to light",
      "Reflection of sunlight by mirrors"
    ],
    correct: 2
  },
  {
    question: "Which of the following is a drawback of solar energy?",
    options: ["It's non-renewable", "It emits CO₂", "It requires clear sunlight", "It's radioactive"],
    correct: 2
  },
  {
    question: "What do smart grids help with in solar energy?",
    options: [
      "Generating more solar energy",
      "Balancing supply and demand",
      "Blocking excess sunlight",
      "Making solar panels cheaper"
    ],
    correct: 1
  },
  {
    question: "Which country leads the world in solar energy capacity?",
    options: ["India", "USA", "Germany", "China"],
    correct: 3
  }
];

function renderQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  quizQuestions.forEach((q, index) => {
    const questionHTML = `
      <div class="quiz-question">
        <p><strong>Q${index + 1}:</strong> ${q.question}</p>
        ${q.options.map((opt, i) => `
          <button onclick="checkAnswer(${index}, ${i}, this)">${opt}</button>
        `).join('')}
        <p id="feedback-${index}" class="quiz-feedback"></p>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', questionHTML);
  });
}

function checkAnswer(questionIndex, selectedIndex, btn) {
  const question = quizQuestions[questionIndex];
  const feedback = document.getElementById(`feedback-${questionIndex}`);

  const buttons = btn.parentElement.querySelectorAll("button");
  buttons.forEach(b => b.disabled = true);

  if (selectedIndex === question.correct) {
    btn.style.backgroundColor = "#2ecc71"; // Green for correct
    feedback.textContent = "Correct!";
  } else {
    btn.style.backgroundColor = "#e74c3c"; // Red for wrong
    feedback.textContent = `Wrong! Correct answer: ${question.options[question.correct]}`;
  }
}

document.addEventListener("DOMContentLoaded", renderQuiz);
