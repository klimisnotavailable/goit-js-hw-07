function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector("input[type=number]")
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("div#boxes")


createBtn.addEventListener("click", (event) => {
  if (numberInput.value >= 1 && numberInput.value <= 100) {
    boxesContainer.innerHTML = "";
    let divSize = 20;

    for (let i = 1; i <= numberInput.value; i += 1){

      boxesContainer.insertAdjacentHTML("beforeend", `<div style="height: ${divSize}px; width: ${divSize}px; background-color: ${getRandomHexColor()}"></div>`)
      divSize += 10

    }

    numberInput.value = "";


  }
})

destroyBtn.addEventListener("click", (event) => boxesContainer.innerHTML = "")
