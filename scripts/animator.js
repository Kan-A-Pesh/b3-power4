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
