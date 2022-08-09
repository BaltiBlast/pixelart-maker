const form = {
  // ---------------------------------------------------------------------
  // GENERIC VARIABLE / VALUE
  appContainer: document.getElementById("app"),

  // ---------------------------------------------------------------------
  // INIT SCRIPT
  init: () => {
    form.createForm();
  },

  // ---------------------------------------------------------------------
  // FUNCTION CREATED FORM
  createForm: () => {
    // Destructured form object
    const { appContainer } = form;

    // -- ELEMENTS -- //
    // Form ~
    const formDataGrid = document.createElement("form");
    // Form event ~
    formDataGrid.addEventListener("submit", (e) => {
      e.preventDefault();

      // Input form value ~
      let numberSquare = inputFormNumber.value;
      let sizeSquare = inputFormSize.value;

      // methode called in "grid.js" ~
      grid.gridGenerator(numberSquare, sizeSquare);
    });

    // -- INPUT NUMBER & ATTRIBUTES -- //
    const inputFormNumber = document.createElement("input");
    Object.assign(inputFormNumber, {
      id: "inputSize",
      type: "number",
      placeholder: "size",
      min: 0,
    });

    // -- INPUT SIZE & ATTRIBUTE -- //
    const inputFormSize = document.createElement("input");
    Object.assign(inputFormSize, {
      id: "inputNumber",
      type: "number",
      placeholder: "size",
      min: 5,
      step: 5,
    });

    // -- SUBMIT BUTTON & ATTRIBUTES -- //
    const buttonFormSubmit = document.createElement("button");
    buttonFormSubmit.setAttribute("type", "submit");
    buttonFormSubmit.innerText = "Generate !";

    formDataGrid.append(inputFormNumber, inputFormSize, buttonFormSubmit);
    appContainer.appendChild(formDataGrid);
  },
};
