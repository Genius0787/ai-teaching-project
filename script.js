// Flashcard content
const flashcards = [
 {
    question: "What is solar energy?",
    answer: "Solar energy is the energy from the sun that is converted into thermal or electrical energy."
  },
  {
    question: "What is the photoelectric effect?",
    answer: "The emission of electrons from a material when light shines on it—it's the basis of solar cells."
  },
  {
    question: "What is a photovoltaic (PV) cell?",
    answer: "A PV cell converts sunlight directly into electricity using the photovoltaic effect."
  },
  {
    question: "What materials are used in solar cells?",
    answer: "Silicon, perovskites, and thin-film semiconductors like cadmium telluride (CdTe)."
  },
  {
    question: "What is solar thermal energy?",
    answer: "It involves capturing heat from sunlight and using it for heating or to produce electricity."
  },
  {
    question: "What is a smart grid?",
    answer: "A smart grid integrates renewable energy sources and allows for automated, real-time energy management."
  },
  {
    question: "Name a key advantage of solar energy.",
    answer: "It’s renewable, abundant, and has a low carbon footprint."
  },
  {
    question: "What limits the efficiency of solar panels?",
    answer: "Material limitations, sunlight angle, dust, temperature, and weather conditions."
  },
  {
    question: "What is net metering?",
    answer: "A billing system that credits solar panel owners for the electricity they add to the grid."
  },
  {
    question: "What are solar applications beyond electricity?",
    answer: "Water heating, desalination, cooking, lighting, and powering remote sensors."
  }
];

let currentIndex = 0;
const container = document.getElementById("card-container");

function nextCard() {
  const card = flashcards[currentIndex];
  container.innerHTML = `
    <div style="padding: 20px; background: #f0f8ff; border-radius: 10px;">
      <strong>Q:</strong> ${card.question}<br><br>
      <em>Answer:</em> ${card.answer}
    </div>
  `;
  currentIndex = (currentIndex + 1) % flashcards.length;
}

// Show the first flashcard on load
document.addEventListener("DOMContentLoaded", nextCard);

