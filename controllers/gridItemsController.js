//CONTROLADOR PARA DEMOSTRACIÓN DEL LAYOUT DE LOS GRID-ITEMS. 
const gridFlowContainer = document.querySelector("#grid-item-dynamic");
const flowInputs = document.querySelectorAll("#controller-container input");
const horizontalDisplay = document.querySelector("#horizontal-value");
const verticalDisplay = document.querySelector("#vertical-value");
flowInputs.forEach((input) => {
    input.addEventListener("click", (e) => {
        const flow = e.target.name;
        const flowValue = e.target.id;
        if (flow === "vertical") {
            gridFlowContainer.style.alignItems = flowValue;
            verticalDisplay.textContent = flowValue;
        }
        if (flow === "vertical" && flowValue === "default") {
            gridFlowContainer.style.alignItems = "";
            verticalDisplay.textContent = "";
        }
        if (flow === "horizontal") {
            gridFlowContainer.style.justifyItems = flowValue;
            horizontalDisplay.textContent = flowValue;
        }
        if (flow === "horizontal" && flowValue === "default") {
            gridFlowContainer.style.justifyItems = "";
            horizontalDisplay.textContent = "";
        }
    });
});
