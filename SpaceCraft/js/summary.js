window.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("spaceUser"));
  const score = localStorage.getItem("spaceScore");

  if (!data) {
    document.querySelector(".summary-container").innerHTML = `
      <h1>🚫 No Data Found</h1>
      <p>Please restart your journey from the beginning.</p>
      <button onclick="window.location.href='index.html'">Go Home</button>
    `;
    return;
  }

  const facts = {
    Earth: "Earth is the only known planet that supports life.",
    Mars: "Mars is called the Red Planet due to iron oxide dust.",
    Venus: "Venus is the hottest planet in our solar system.",
    Jupiter: "Jupiter has over 90 moons and the Great Red Spot!",
    Neptune: "Neptune has supersonic winds over 2,100 km/h!"
  };

  document.getElementById("userName").textContent = "Captain: " + data.name;
  document.getElementById("userAge").textContent = "Age: " + data.age;
  document.getElementById("userPlanet").textContent = "Planet: " + data.planet;
  document.getElementById("userScore").textContent = "Score: " + score + " / 4";
  document.getElementById("planetFact").textContent = "🪐 Fun Fact: " + facts[data.planet];
});
