function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body")
const colorBtn = document.querySelector("button")
const colorNameContainer = document.querySelector(".color")
  
function changeColor(color) {
  body.style.backgroundColor = color
}

colorBtn.addEventListener("click", () => {
  changeColor(getRandomHexColor())
  colorNameContainer.textContent = getRandomHexColor()
})


