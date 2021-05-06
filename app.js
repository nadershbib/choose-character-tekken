const characters = document.querySelectorAll(".tekken-character");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const selectCharacter = document.querySelectorAll(".select-character");

let idx = 0;

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowLeft") {
    idx--;
    if (idx < 0) {
      idx = characters.length - 1;
    }
    removeShow();
    characters[idx].classList.add("show");
    removeHoverState();
    selectCharacter[idx].classList.add("hoverState");
  }
  console.log(e.key === "ArrowRight");
  if (e.key === "ArrowRight") {
    idx++;
    if (idx >= characters.length) {
      idx = 0;
    }
    removeShow();
    characters[idx].classList.add("show");
    removeHoverState();
    selectCharacter[idx].classList.add("hoverState");
  }
});

nextBtn.addEventListener("click", () => {
  idx++;
  if (idx >= characters.length) {
    idx = 0;
  }
  removeShow();
  characters[idx].classList.add("show");
  removeHoverState();
  selectCharacter[idx].classList.add("hoverState");
});

prevBtn.addEventListener("click", () => {
  idx--;
  if (idx < 0) {
    idx = characters.length - 1;
  }
  removeShow();
  characters[idx].classList.add("show");
  removeHoverState();
  selectCharacter[idx].classList.add("hoverState");
});

selectCharacter.forEach((character, i) => {
  character.addEventListener("mouseover", (e) => {
    // removeShow();
    // characters[i].classList.add("show");
    removeShow();
    removeHoverState();
    selectCharacter[i].classList.add("hoverState");
    characters[i].classList.add("show");
    idx = i;
  });
});

function removeShow() {
  characters.forEach((character) => {
    character.classList.remove("show");
  });
}

function removeHoverState() {
  selectCharacter.forEach((character) => {
    character.classList.remove("hoverState");
  });
}
