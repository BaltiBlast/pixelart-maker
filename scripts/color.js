const color = {
  headerContainer: document.getElementById("header"),
  mouseDown: false,
  currentColor: "",

  init: () => {
    color.panelColor();
    color.handleMouseDown();
    color.handleMouseUp();
  },

  // ---------------------------------------------------------------------
  // PANEL COLOR + COLOR PICKER
  panelColor: () => {
    // DIV CONTAINER COLOR PICKER + ATRIBUTES
    const colorPanelContainer = document.createElement("div");
    colorPanelContainer.setAttribute("class", "color__picker");

    // TEXT + ATRIBUTES
    const text = document.createElement("p");
    text.setAttribute("class", "color__picker-text");
    text.innerText = "Color Picker";

    // ADD IN COLOR PICKER CONTAINER
    colorPanelContainer.appendChild(text);

    const picker = new Picker(colorPanelContainer);
    picker.onDone = function (selectedColor) {
      color.currentColor = selectedColor.hex;
    };

    color.headerContainer.appendChild(colorPanelContainer);
  },

  // ---------------------------------------------------------------------
  // METHODE CHANGE COLOR
  changeColor: (e) => {
    e.target.style.backgroundColor = color.currentColor;
  },

  // Mousedown event on body
  handleMouseDown: () => {
    document.body.addEventListener("mousedown", () => {
      grid.mouseDown = true;
    });
  },

  // Mouseup event on body
  handleMouseUp: () => {
    document.body.addEventListener("mouseup", () => {
      grid.mouseDown = false;
    });
  },

  // Color change when click is holded
  applyColorHold: (e) => {
    if (grid.mouseDown) {
      e.target.style.backgroundColor = color.currentColor;
    }
  },
};
