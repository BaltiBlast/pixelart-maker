const grid = {
  // ---------------------------------------------------------------------
  // Generic variables / values
  appContainer: document.getElementById("app"),
  squareContainer: document.createElement("div"),
  mouseDown: false,
  // ---------------------------------------------------------------------
  // Init script
  init: () => {
    grid.gridContainer();
    grid.handleMouseUp();
    grid.handleMouseDown();
  },

  // ---------------------------------------------------------------------
  // grid generator methode
  gridGenerator: (number, size) => {
    // Destructured grid object
    const { squareContainer, changeColor, applyColorHold } = grid;

    // Purge "squareContainer" every time "gridGenerator" was called
    squareContainer.innerHTML = "";

    // -- LOOP CREATE COMPLETE GRID
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
    const { squareContainer, appContainer } = grid;
    squareContainer.setAttribute("class", "grid");
    appContainer.appendChild(squareContainer);
  },

  // ---------------------------------------------------------------------
  // CHANGE COLOR FUNCTION
  changeColor: (e) => {
    e.target.style.backgroundColor = "black";
  },

  // ---------------------------------------------------------------------
  //
  handleMouseDown: () => {
    document.body.addEventListener("mousedown", () => {
      grid.mouseDown = true;
    });
  },

  handleMouseUp: () => {
    document.body.addEventListener("mouseup", () => {
      grid.mouseDown = false;
    });
  },

  applyColorHold: (e) => {
    if (grid.mouseDown) {
      e.target.style.backgroundColor = "black";
    }
  },
};
