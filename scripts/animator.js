function startTurnAnimation(color) {
  const turnElement = document.createElement("div");
  turnElement.classList.add("turn-animation");
  turnElement.style.backgroundColor = color;

  const turnText = document.createElement("span");
  turnText.textContent = `${color} turn`;
  turnElement.appendChild(turnText);

  document.body.appendChild(turnElement);

  setTimeout(() => {
    turnElement.remove();
  }, 2500);
}

function startWinAnimation(color) {
  const winElement = document.createElement("div");
  winElement.classList.add("win-animation");
  winElement.style.setProperty("--color", color);

  const winBackgroundLeft = document.createElement("div");
  winBackgroundLeft.classList.add("win-background-left");
  winElement.appendChild(winBackgroundLeft);

  const winBackgroundRight = document.createElement("div");
  winBackgroundRight.classList.add("win-background-right");
  winElement.appendChild(winBackgroundRight);

  const winText = document.createElement("span");
  winText.textContent = `${color} wins!`;
  winElement.appendChild(winText);

  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart";
  restartButton.addEventListener("click", () => {
    window.location.reload();
  });
  winElement.appendChild(restartButton);

  document.body.appendChild(winElement);
}
