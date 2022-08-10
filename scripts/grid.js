const grid = {
  // ---------------------------------------------------------------------
  // Generic variables / values
  mainContainer: document.getElementById("main"),
  squareContainer: document.createElement("div"),
  squareContainerSize: 750,

  // ---------------------------------------------------------------------
  // Init script
  init: () => {
    grid.gridContainer();
  },

  // ---------------------------------------------------------------------
  // grid generator methode
  gridGenerator: (number) => {
    // -- DESTRUCTURATION -- //
    // grid object
    const { squareContainer, squareSizeCalculator } = grid;

    // color object
    const { applyColorHold, changeColor } = color;

    // -- CREATE COMPLETE GRID -- //
    // Purge "squareContainer" every time "gridGenerator" was called
    squareContainer.innerHTML = "";

    for (let index = 0; index < number; index++) {
      // -- CREATE COL -- //
      const col = document.createElement("div");
      col.style.width = squareSizeCalculator(number);
      col.style.height = squareSizeCalculator(number);
      squareContainer.appendChild(col);

      for (let index = 0; index < number; index++) {
        // -- CREATE SQUARE & ATTRIBUTES -- //
        const square = document.createElement("div");
        square.setAttribute("class", "square");

        // Square generic style
        square.style.width = "100%";
        square.style.height = "100%";
        square.style.backgroundColor = "white";

        // event on each square
        square.addEventListener("mouseover", applyColorHold);
        square.addEventListener("mousedown", applyColorHold);
        square.addEventListener("mousedown", changeColor);
        col.appendChild(square);
      }
    }
  },

  // ---------------------------------------------------------------------
  // SET GRID CONTAINER
  gridContainer: () => {
    // Destructured grid object
    const { squareContainer, mainContainer } = grid;
    squareContainer.setAttribute("class", "grid");
    mainContainer.appendChild(squareContainer);
  },

  squareSizeCalculator: (ele) => {
    let squareSize = 750 / ele;
    squareSize = squareSize / 750;
    squareSize = squareSize * 100;
    return `${squareSize}%`;
  },
};
