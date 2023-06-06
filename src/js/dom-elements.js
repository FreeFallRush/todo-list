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

  const formContainer = document.querySelector("[data-modal-form]");

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

  const createEditProjectModal = () => {
    const divTitle = createDiv("modal-title");
    const modalTitle = createH2("modal-edit-project-title");
    modalTitle.textContent = "Edit Project";

    const divProjectTitleInput = createDiv("project-name-form");
    const inputNameText = createH3("name-input-text");
    inputNameText.textContent = "Project Name:";
    const editProjectLabel = createLabel("edit-project");
    const editProjectInput = createInput("edit-project", "text");
    editProjectInput.setAttribute("data-edit-project-name", "");
    editProjectInput.maxLength = 60;

    const divProjectDescriptionInput = createDiv("project-description-form");
    const inputDescriptionText = createH3("description-input-text");
    inputDescriptionText.textContent = "Project Description:";
    const editProjectDescriptionLabel = createLabel("edit-project-description");
    const editProjectDescriptionInput = createTextArea(
      "edit-project-description"
    );
    editProjectDescriptionInput.placeholder =
      "Your choice if you want to add a short description to your project...";
    editProjectDescriptionInput.setAttribute(
      "data-edit-project-description",
      ""
    );
    editProjectDescriptionInput.maxLength = 350;

    const divColorInput = createDiv("project-color-form");
    const inputColorText = createH3("color-input-text");
    inputColorText.textContent = `Project's Color:`;
    const editColorInputLabel = createLabel("project-color");
    const editColorInput = createInput("project-color", "color");
    editColorInput.setAttribute("data-edit-project-color", "");

    formContainer.textContent = "";

    divTitle.appendChild(modalTitle);
    divProjectTitleInput.append(
      inputNameText,
      editProjectLabel,
      editProjectInput
    );
    divProjectDescriptionInput.append(
      inputDescriptionText,
      editProjectDescriptionLabel,
      editProjectDescriptionInput
    );

    divColorInput.append(inputColorText, editColorInputLabel, editColorInput);

    formContainer.append(
      divTitle,
      divProjectTitleInput,
      divProjectDescriptionInput,
      divColorInput
    );
  };

  const createAddToDoModal = () => {
    const divTitle = createDiv("modal-title");
    const modalTitle = createH2("modal-new-todo-title");
    modalTitle.textContent = "Add New ToDo";

    const divToDoTitleInput = createDiv("todo-name-form");
    const inputNameText = createH3("todo-name-text");
    inputNameText.textContent = "ToDo Name:";
    const newToDoLabel = createLabel("new-todo");
    const newToDoInput = createInput("new-todo", "text");
    newToDoInput.placeholder = "ToDo Name?";
    newToDoInput.setAttribute("data-new-todo-name", "");
    newToDoInput.maxLength = 150;
    newToDoInput.setAttribute("required", "");

    const dateDiv = createDiv("todo-duedate");
    const dateInputNameText = createH3("todo-duedate-text");
    dateInputNameText.textContent = "Due Date:";
    const dueDateLabel = createLabel("due-date");
    const dueDateInput = createInput("due-date", "date");
    dueDateInput.setAttribute("data-due-date-input", "");
    dueDateInput.setAttribute("required", "");

    const priorityDiv = createDiv("todo-priority");
    const priorityNameText = createH3("todo-priority-text");
    priorityNameText.textContent = "Priority: ";
    const selectPriorityLabel = createLabel("todo-priority");
    const selectPriority = createSelectElement("todo-priority");
    selectPriority.setAttribute("data-select-priority", "");
    const priorityLow = createOption("Low Priority");
    priorityLow.textContent = "Low Priority";
    const priorityMedium = createOption("Medium Priority");
    priorityMedium.textContent = "Medium Priority";
    const priorityHigh = createOption("High Priority");
    priorityHigh.textContent = "High Priority";

    formContainer.textContent = "";

    divTitle.appendChild(modalTitle);
    divToDoTitleInput.append(inputNameText, newToDoLabel, newToDoInput);

    dateDiv.append(dateInputNameText, dueDateLabel, dueDateInput);

    selectPriority.append(priorityLow, priorityMedium, priorityHigh);
    priorityDiv.append(priorityNameText, selectPriorityLabel, selectPriority);

    formContainer.append(divTitle, divToDoTitleInput, dateDiv, priorityDiv);
  };

  const createEditToDoModal = () => {
    const divTitle = createDiv("modal-title");
    const modalTitle = createH2("modal-edit-todo-title");
    modalTitle.textContent = "Edit ToDo";

    const divToDoTitleInput = createDiv("todo-name-form");
    const inputNameText = createH3("todo-name-text");
    inputNameText.textContent = "Edit Name:";
    const editToDoLabel = createLabel("edit-todo");
    const editToDoInput = createInput("edit-todo", "text");
    editToDoInput.setAttribute("data-edit-todo-name", "");
    editToDoInput.maxLength = 150;
    editToDoInput.setAttribute("required", "");

    const dateDiv = createDiv("todo-duedate");
    const dateInputNameText = createH3("todo-duedate-text");
    dateInputNameText.textContent = "Due Date:";
    const editDueDateLabel = createLabel("edit-duedate");
    const editDueDateInput = createInput("edit-duedate", "date");
    editDueDateInput.setAttribute("data-edit-duedate-input", "");
    editDueDateInput.setAttribute("required", "");

    const priorityDiv = createDiv("todo-priority");
    const priorityNameText = createH3("todo-priority-text");
    priorityNameText.textContent = "Priority: ";
    const editSelectPriorityLabel = createLabel("todo-priority");
    const editSelectPriority = createSelectElement("todo-priority");
    editSelectPriority.setAttribute("data-edit-select", "");
    const priorityLow = createOption("Low Priority");
    priorityLow.textContent = "Low Priority";
    const priorityMedium = createOption("Medium Priority");
    priorityMedium.textContent = "Medium Priority";
    const priorityHigh = createOption("High Priority");
    priorityHigh.textContent = "High Priority";

    formContainer.textContent = "";

    divTitle.appendChild(modalTitle);
    divToDoTitleInput.append(inputNameText, editToDoLabel, editToDoInput);

    dateDiv.append(dateInputNameText, editDueDateLabel, editDueDateInput);

    editSelectPriority.append(priorityLow, priorityMedium, priorityHigh);
    priorityDiv.append(
      priorityNameText,
      editSelectPriorityLabel,
      editSelectPriority
    );

    formContainer.append(divTitle, divToDoTitleInput, dateDiv, priorityDiv);
  };

  //Project Card

  const createProjectCard = (project, index) => {
    const projectCard = createDiv("project-card");
    projectCard.setAttribute("data-project", index);
    projectCard.style.backgroundColor = project.color;

    const projectName = createH3("project-title");
    projectName.setAttribute("data-index", index);
    projectName.textContent = project.name;
    const tasksNumb = createPara("tasks-number");
    tasksNumb.textContent = `Tasks(${project.todos.length})`;

    const projectDescription = createPara("project-description");
    projectDescription.setAttribute("data-index", index);
    const textDescription = project.description;
    const truncatedTextDescription = textDescription.substring(0, 50) + "...";
    projectDescription.textContent = truncatedTextDescription;
    projectCard.append(projectName, tasksNumb, projectDescription);
    return projectCard;
  };

  return {
    createAddProjectModal,
    createEditProjectModal,
    createAddToDoModal,
    createEditToDoModal,
  };
})();

export default domElements;
