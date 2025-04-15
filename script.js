// Flashcard content
const flashcards = [
  { question: "What is Artificial Intelligence?", answer: "AI is the simulation of human intelligence in machines." },
  { question: "Name one AI tool used in education.", answer: "ChatGPT is a popular AI tool for education." },
  { question: "How does AI help teachers?", answer: "It can automate grading, create content, and personalize learning." },
  { question: "What is Elicit used for?", answer: "Elicit is used for AI-assisted research and literature review." },
  { question: "What is an exit ticket in teaching?", answer: "A short activity to reflect on what students learned in class." }
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

