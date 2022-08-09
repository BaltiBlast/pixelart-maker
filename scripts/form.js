const form = {
  // ---------------------------------------------------------------------
  // GENERIC VARIABLE / VALUE
  headerContainer: document.getElementById("header"),

  // ---------------------------------------------------------------------
  // INIT SCRIPT
  init: () => {
    form.createForm();
  },

  // ---------------------------------------------------------------------
  // FUNCTION CREATED FORM
  createForm: () => {
    // Destructured form object
    const { headerContainer } = form;

    // -- ELEMENTS -- //
    // Form ~
    const formDataGrid = document.createElement("form");
    formDataGrid.setAttribute("class", "form");
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
      id: "inputNumber",
      className: "form__input",
      type: "number",
      placeholder: "number",
      max: 10,
      min: 1,
    });

    // -- INPUT SIZE & ATTRIBUTE -- //
    const inputFormSize = document.createElement("input");
    Object.assign(inputFormSize, {
      id: "inputSize",
      className: "form__input",
      type: "number",
      placeholder: "size",
      max: 70,
      min: 20,
      step: 5,
    });

    // -- SUBMIT BUTTON & ATTRIBUTES -- //
    const buttonFormSubmit = document.createElement("button");
    buttonFormSubmit.innerText = "Generate";
    Object.assign(buttonFormSubmit, {
      type: "submit",
      className: "form__input",
    });

    formDataGrid.append(inputFormNumber, inputFormSize, buttonFormSubmit);
    headerContainer.appendChild(formDataGrid);
  },
};
