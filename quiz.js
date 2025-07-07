window.addEventListener("DOMContentLoaded", () => {
  // 🌌 Optional: Background music playback trigger
  const shouldPlayMusic = localStorage.getItem("bgMusic");
  if (shouldPlayMusic === "yes") {
    const bgMusic = new Audio("audio/bg-music.mp3");
    bgMusic.loop = true;
    bgMusic.volume = 0.4;
    document.body.addEventListener("click", () => {
      bgMusic.play();
    }, { once: true });
    localStorage.removeItem("bgMusic");
  }

  // ✅ 4 Space-themed Questions
  const questions = [
    {
      question: "🌕 Which planet is known as the Red Planet?",
      answers: ["Mars", "Venus", "Jupiter"],
      correct: "Mars"
    },
    {
      question: "🪐 Which planet has the most rings?",
      answers: ["Saturn", "Jupiter", "Neptune"],
      correct: "Saturn"
    },
    {
      question: "☀️ Which planet is closest to the Sun?",
      answers: ["Earth", "Mercury", "Mars"],
      correct: "Mercury"
    },
    {
      question: "🌌 What galaxy do we live in?",
      answers: ["Milky Way", "Andromeda", "Black Hole"],
      correct: "Milky Way"
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const nextBtn = document.getElementById("nextBtn");

  function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    answersElement.innerHTML = "";

    q.answers.forEach(answer => {
      const btn = document.createElement("button");
      btn.textContent = answer;
      btn.classList.add("answer-btn");
      btn.onclick = () => checkAnswer(answer, q.correct);
      answersElement.appendChild(btn);
    });
  }

  function checkAnswer(selected, correct) {
    const buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correct) {
        btn.classList.add("correct");
      } else if (btn.textContent === selected) {
        btn.classList.add("wrong");
      }
    });

    if (selected === correct) {
      score++;
      showPopup("🎯 Great Job! That's Correct 🚀", "#00e676");
    } else {
      showPopup("💥 Oops! That's Incorrect ❌", "#ff1744");
    }

    nextBtn.style.display = "inline-block";
  }

  function showPopup(message, color) {
    const popup = document.createElement("div");
    popup.textContent = message;
    popup.style.position = "fixed";
    popup.style.top = "40%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "20px 30px";
    popup.style.fontSize = "24px";
    popup.style.background = color;
    popup.style.color = "white";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 0 20px black";
    popup.style.zIndex = "1000";
    popup.style.opacity = "0";
    popup.style.transition = "opacity 0.5s ease";

    document.body.appendChild(popup);
    setTimeout(() => { popup.style.opacity = "1"; }, 100);
    setTimeout(() => {
      popup.style.opacity = "0";
      setTimeout(() => popup.remove(), 500);
    }, 1000);
  }

  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    nextBtn.style.display = "none";

    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      localStorage.setItem("quizScore", score);
      window.location.href = "summary.html";
    }
  });

  loadQuestion();
});
