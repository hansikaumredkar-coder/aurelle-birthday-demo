const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", () => {
  surpriseMessage.textContent =
    "You deserve all the happiness, love, and beautiful surprises in the world! 💗";
  surpriseMessage.classList.remove("hidden");
});
