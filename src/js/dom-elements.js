const domElements = (() => {
  //Main dom elements
  const createH2 = (className) => {
    const h2 = document.createElement("h2");
    h2.classList.add(className);
    return h2;
  };

  const createH3 = (className) => {
    const h3 = document.createElement("h3");
    h3.classList.add(className);
    return h3;
  };

  const createPara = (className) => {
    const p = document.createElement("p");
    p.classList.add(className);
    return p;
  };

  const createDiv = (className) => {
    const div = document.createElement("div");
    div.classList.add(className);
    return div;
  };

  const createButton = (className) => {
    const button = document.createElement("button");
    button.classList.add(className);
    return button;
  };

  const createLabel = (className) => {
    const label = document.createElement("label");
    label.classList.add(`${className}-label`);
    label.setAttribute("for", `${className}-input`);
    return label;
  };

  const createInput = (className, inputType) => {
    const input = document.createElement("input");
    input.classList.add(`${className}-input`);
    input.setAttribute("type", inputType);
    input.setAttribute("id", `${className}-input`);
    return input;
  };

  const createTextArea = (className) => {
    const textArea = document.createElement("textarea");
    textArea.classList.add(`${className}-input`);
    textArea.setAttribute("id", `${className}-input`);
    textArea.setAttribute("name", `${className}-input`);
    return textArea;
  };

  const createSelectElement = (className) => {
    const selectElement = document.createElement("select");
    selectElement.setAttribute("name", `${className}-select`);
    selectElement.setAttribute("id", `${className}-select`);
    return selectElement;
  };

  const createOption = (value) => {
    const option = document.createElement("option");
    option.setAttribute("value", value);
    return option;
  };

  //Modals
  const createAddProjectModal = () => {
    const divTitle = createDiv("modal-title");
    const modalTitle = createH2("modal-new-project-title");
    modalTitle.textContent = "Add New Project";

    const divProjectTitleInput = createDiv("project-name-form");
    const inputNameText = createH3("name-input-text");
    inputNameText.textContent = "Project Name:";
    const newProjectLabel = createLabel("new-project");
    const newProjectInput = createInput("new-project", "text");
    newProjectInput.placeholder = "How would you call it?";
    newProjectInput.setAttribute("data-new-project-name", "");
    newProjectInput.maxLength = 50;

    const divProjectDescriptionInput = createDiv("project-description-form");
    const inputDescriptionText = createH3("description-input-text");
    inputDescriptionText.textContent = "Project Description:";
    const newProjectDescriptionLabel = createLabel("new-project-description");
    const newProjectDescriptionInput = createTextArea(
      "new-project-description"
    );
    newProjectDescriptionInput.placeholder =
      "Your choice if you want to add a short description to your project...";
    newProjectDescriptionInput.setAttribute("data-new-project-description", "");
    newProjectDescriptionInput.maxLength = 350;

    const divColorInput = createDiv("project-color-form");
    const inputColorText = createH3("color-input-text");
    inputColorText.textContent = `Project's Color:`;
    const colorInputLabel = createLabel("project-color");
    const colorInput = createInput("project-color", "color");
    colorInput.setAttribute("data-project-color", "");

    formContainer.textContent = "";

    divTitle.appendChild(modalTitle);
    divProjectTitleInput.append(
      inputNameText,
      newProjectLabel,
      newProjectInput
    );
    divProjectDescriptionInput.append(
      inputDescriptionText,
      newProjectDescriptionLabel,
      newProjectDescriptionInput
    );

    divColorInput.append(inputColorText, colorInputLabel, colorInput);

    formContainer.append(
      divTitle,
      divProjectTitleInput,
      divProjectDescriptionInput,
      divColorInput
    );
  };

  return {
    createAddProjectModal,
  };
})();

export default domElements;
