const generateBtn = document.querySelector(".btn");
const colorBoxes = document.querySelectorAll(".color-box");

generateBtn.addEventListener("click", generatePalette);

function generatePalette() {
    const colors = [];
    for (let i = 0; i < colorBoxes.length; i++) {
        colors.push(generateRandomColor());
    }
    updatePalette(colors);
}


function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function updatePalette(colors) {
    colorBoxes.forEach((box, index) => {
        const color = colors[index];
        const colorDiv = box.querySelector(".color");
        const hexValue = box.querySelector(".hex-value");

        colorDiv.style.backgroundColor = color;
        hexValue.textContent = color;
    });
}

// Copy color
colorBoxes.forEach(box => {
    const copyIcon = box.querySelector(".fa-copy");
    const hexValue = box.querySelector(".hex-value");

    copyIcon.addEventListener("click", () => {
        navigator.clipboard.writeText(hexValue.textContent).then(() => {
            copyIcon.title = "Copied!";
            hexValue.title = "Copied!";

            copyIcon.classList.remove("fa-regular");
            copyIcon.classList.add("fa-solid");

            setTimeout(() => {
                copyIcon.title = "Copy to clipboard";
                hexValue.title = "Copy to clipboard";
                copyIcon.classList.remove("fa-solid");
                copyIcon.classList.add("fa-regular");
            }, 1000);
        });
    });
});

