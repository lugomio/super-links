const modeButton = document.querySelector("#color-mode");
const userImage = document.querySelector(".user-image");

function toggleMode() {
    const currentMode = modeButton.dataset.mode;

    if (currentMode === "light") {
        modeButton.dataset.mode = "dark";
        userImage.src = "./assets/img/monkey-dark.jpg";
    } else {
        modeButton.dataset.mode = "light";
        userImage.src = "./assets/img/monkey-light.jpg";
    }
}

modeButton.addEventListener('click', toggleMode);