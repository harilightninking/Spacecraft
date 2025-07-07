document.getElementById("spaceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const planet = document.getElementById("planet").value;

  localStorage.setItem("spaceUser", JSON.stringify({ name, age, planet }));

  // Save flag to play music on quiz page
  localStorage.setItem("bgMusic", "yes");

  // Play rocket launch sound
  const launchSound = new Audio("audio/rocket-launch.mp3");
  launchSound.play();

  // Show launch animation
  document.body.innerHTML = `
    <div class="launching">
      <img src="images/rocket.png" class="rocket-img" />
      <h1>🚀 Launching to Quiz Page...</h1>
    </div>
  `;

  // Delay before going to quiz
  setTimeout(() => {
    window.location.href = "quiz.html";
  }, 5000);
});
