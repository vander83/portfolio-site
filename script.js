const menuButton = document.querySelector("#menu-button");
const mainMenu = document.querySelector(".main-menu");

function menuButtonText() {
  if (menuButton.innerHTML === "menu&nbsp;") {
    menuButton.innerHTML = "exit&nbsp;";
  } else {
    menuButton.innerHTML = "menu&nbsp;";
  }
}

function menuButtonClick() {
  mainMenu.classList.toggle("menu-show");
  menuButton.classList.toggle("menu-button-exit");
  menuButtonText();
}

menuButton.addEventListener('click', menuButtonClick);