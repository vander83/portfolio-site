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

gsap.to(".pop-art-guy", {y: '-60vh', duration: 0.8, delay: 0.2, ease: 'ease-out'});
gsap.to(".main-title", {scale: 1.4, rotation: -2, duration: 0.5, delay: 1, opacity: 1, ease: "bounce"});
