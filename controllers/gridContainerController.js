//CONTROLADOR PARA DEMOSTRACIÓN DEL LAYOUT DE LOS GRID-ITEMS.
const gridContentContainer = document.querySelector("#grid-content-dynamic");
const flowContentInputs = document.querySelectorAll("#grid-content-controller input");
const horizontalContentDisplay = document.querySelector("#horizontal-content-value");
const verticalContentDisplay = document.querySelector("#vertical-content-value");

flowContentInputs.forEach((input) => {
    input.addEventListener("click", (e) => {
        const flowContent = e.target.name;
        const flowContentValue = e.target.id;
        if (flowContent === "vertical-content") {
            gridContentContainer.style.alignContent = flowContentValue;
            verticalContentDisplay.textContent = flowContentValue;
        }
        if (flowContent === "vertical-content" && flowContentValue === "default") {
            gridContentContainer.style.alignContent = "";
            verticalContentDisplay.textContent = "";
        }
        if (flowContent === "horizontal-content") {
            gridContentContainer.style.justifyContent = flowContentValue;
            horizontalContentDisplay.textContent = flowContentValue;
        }
        if (flowContent === "horizontal-content" && flowContentValue === "default") {
            gridContentContainer.style.justifyContent = "";
            horizontalContentDisplay.textContent = "";
        }
    });
});
