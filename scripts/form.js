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

      // methode called in "grid.js" ~
      grid.gridGenerator(numberSquare);
    });

    // -- INPUT NUMBER & ATTRIBUTES -- //
    const inputFormNumber = document.createElement("input");
    Object.assign(inputFormNumber, {
      id: "inputNumber",
      className: "form__input",
      type: "number",
      placeholder: "number",
      max: 100,
      min: 1,
    });

    // -- SUBMIT BUTTON & ATTRIBUTES -- //
    const buttonFormSubmit = document.createElement("button");
    buttonFormSubmit.innerText = "Generate";
    Object.assign(buttonFormSubmit, {
      type: "submit",
      className: "form__input",
    });

    formDataGrid.append(inputFormNumber, buttonFormSubmit);
    headerContainer.appendChild(formDataGrid);
  },
};
