let themeButton = document.getElementById("theme-button");
/*console.log(themeButton)*/

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeButton.src = "img/atmoon-30.png";
    themeButton.title = "Toggle Light Mode";
    themeButton.alt = "Light Mode";
  } else {
    themeButton.src = "img/sun-30.png";
    themeButton.title = "Toggle Dark Mode";
    themeButton.alt = "Dark Mode";
  }

}
themeButton.addEventListener("click", toggleDarkMode);


let scaleFactor = 1;
const modalImage = document.querySelector("#thanks-modal .modal-content img");

const scaleImage = () => {
  if (scaleFactor === 1) {
    scaleFactor = 0.8;
  } else {
    scaleFactor = 1;
  }

  modalImage.style.transform = `scale(${scaleFactor})`;
};