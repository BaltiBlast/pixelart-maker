const grid = {
  // ---------------------------------------------------------------------
  // Generic variables / values
  mainContainer: document.getElementById("main"),
  squareContainer: document.createElement("div"),

  // ---------------------------------------------------------------------
  // Init script
  init: () => {
    grid.gridContainer();
  },

  // ---------------------------------------------------------------------
  // grid generator methode
  gridGenerator: (number, size) => {
    // -- DESTRUCTURATION -- //
    // grid object
    const { squareContainer } = grid;

    // color object
    const { applyColorHold, changeColor } = color;

    // -- CREATE COMPLETE GRID -- //

    // Purge "squareContainer" every time "gridGenerator" was called
    squareContainer.innerHTML = "";

    for (let index = 0; index < number; index++) {
      // -- CREATE COL -- //
      const col = document.createElement("div");
      squareContainer.appendChild(col);

      for (let index = 0; index < number; index++) {
        // -- CREATE SQUARE & ATTRIBUTES -- //
        const square = document.createElement("div");
        square.setAttribute("class", "square");

        // Square generic style
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
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
};
