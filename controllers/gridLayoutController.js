const rowSizeController = document.getElementById("rowSizeController");
const columnSizeController = document.getElementById("columnSizeController");
const rowSizeDisplay = document.getElementById("rowSize");
const columnSizeDisplay = document.getElementById("columnSize");
const gridExample4 = document.getElementById("grid-example-4");

//asignamos el valor a los campos.
rowSizeDisplay.textContent = rowSizeController.value;
columnSizeDisplay.textContent = columnSizeController.value + "%";

rowSizeController.addEventListener("change", (e) => {
    console.log(e.target);
    rowSizeDisplay.textContent = e.target.value;
    gridExample4.style.gridTemplateRows = `${e.target.value}px ${e.target.value}px`;
});
columnSizeController.addEventListener("change", (e) => {
    console.log(e.target);
    columnSizeDisplay.textContent = e.target.value + "%";
    gridExample4.style.gridTemplateColumns = `${e.target.value}% ${e.target.value}%`;
});
