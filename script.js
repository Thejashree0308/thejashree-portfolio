const typingTarget = document.getElementById("typing-text");

const phrases = [
  "AI-powered applications",
  "intelligent web experiences",
  "data-driven solutions",
  "clean and modern UIs",
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = phrases[phraseIndex];

  if (!deleting) {
    // typing
    typingTarget.textContent = current.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      setTimeout(() => {
        deleting = true;
      }, 1300);
    }
  } else {
    // deleting
    typingTarget.textContent = current.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  const delay = deleting ? 55 : 90;
  setTimeout(typeLoop, delay);
}

if (typingTarget) {
  typeLoop();
}
