const gridMinContent = document.getElementById("grid-min-content");
const fontSizeController = document.getElementById("fontSizeController");
const fontSizeDisplay = document.getElementById("fontSize");

fontSizeDisplay.textContent = fontSizeController.value;
fontSizeController.addEventListener("change", (e) => {
    fontSizeDisplay.textContent = e.target.value;
    gridMinContent.style.fontSize = parseFloat(e.target.value) + "em";
});
