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
