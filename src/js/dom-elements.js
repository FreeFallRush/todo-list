import projects from "./project";
import todos from "./todo";
import handlers from "./handlers";
import { format, isPast, addDays, eachDayOfInterval } from "date-fns";

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

  // ToDo Card

  const createToDoCard = (todo) => {
    const currentPage = document
      .querySelector("#main-container")
      .getAttribute("data-page");

    const toDoCard = createDiv("todo-card");
    toDoCard.style.backgroundColor = projects.todoList[todo.projectId].color;
    const toDoCardContent = createDiv("todo-content");

    const toDoNameDiv = createDiv("todo-name-container");
    const toDoNamePara = createPara("todo-name");
    toDoNamePara.textContent = todo.title;

    const dueDateDiv = createDiv("todo-duedate-container");
    const toDoDueDatePara = createPara("todo-duedate");

    toDoDueDatePara.textContent = format(new Date(todo.dueDate), "dd-MM-yyyy");

    if (isPast(addDays(new Date(todo.dueDate), 1))) {
      toDoDueDatePara.textContent = "Expired";
    }

    if (
      currentPage === "All ToDos" ||
      currentPage === "Today" ||
      currentPage === "Upcoming" ||
      currentPage === "Important" ||
      currentPage === "Expired"
    ) {
      const todoProjectLabel = createPara("todo-project-label");
      todoProjectLabel.textContent = `Project: ${
        projects.todoList[todo.projectId].name
      }`;
      toDoCard.append(todoProjectLabel);
    }

    const priorityDiv = createDiv("todo-priority-container");
    const toDoPriorityPara = createPara("todo-priority");

    if (todo.priority === "Low Priority") {
      priorityDiv.style.backgroundColor = "#1bbfd1";
      priorityDiv.style.opacity = 0.5;
      toDoPriorityPara.textContent = todo.priority;
    } else if (todo.priority === "Medium Priority") {
      priorityDiv.style.backgroundColor = "#ff7300";
      priorityDiv.style.opacity = 0.5;
      toDoPriorityPara.textContent = todo.priority;
    } else if (todo.priority === "High Priority") {
      priorityDiv.style.backgroundColor = "#c40a5b";
      priorityDiv.style.opacity = 0.5;
      toDoPriorityPara.textContent = todo.priority;
    }

    const toDoActions = createDiv("todo-actions");
    toDoActions.setAttribute("data-todo-btns", todo.projectId);

    const editToDoBtn = createDiv("edit-todo-btn");
    editToDoBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    editToDoBtn.setAttribute("data-edit-todo-btn", todo.id);

    const deleteToDoBtn = createDiv("delete-todo-btn");
    deleteToDoBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteToDoBtn.setAttribute("data-delete-todo-btn", todo.id);
    deleteToDoBtn.addEventListener("click", () => {
      const projectId = todo.projectId;
      todos.deleteCurrentToDo(projectId, todo.id);
      renderSingleProjectPage(projects.todoList[projectId], projectId);
    });

    toDoNameDiv.append(toDoNamePara);
    dueDateDiv.append(toDoDueDatePara);
    priorityDiv.append(toDoPriorityPara);
    toDoActions.append(editToDoBtn, deleteToDoBtn);
    toDoCardContent.append(toDoNameDiv, dueDateDiv, priorityDiv, toDoActions);

    toDoCard.append(toDoCardContent);

    return toDoCard;
  };

  //RenderToDos

  const renderToDos = () => {
    const currentPage = document
      .querySelector("#main-container")
      .getAttribute("data-page");

    const [pagePId, ...others] = currentPage.split("-");
    const toDosContainer = document.querySelector(".todos-container");
    const allTodos = createDiv("all-todos");
    const pageTitle = document.querySelector(".page-title");
    const allToDosToFilter = [];
    let toDosNumb = 0;

    if (currentPage === "All ToDos") {
      projects.todoList.forEach((project) => {
        allToDosToFilter.push(...project.todos);
      });
      allToDosToFilter.forEach((todo) => {
        const toDoCard = createToDoCard(todo);
        toDosContainer.textContent = "";
        allTodos.append(toDoCard);
      });

      toDosContainer.append(allTodos);
      pageTitle.textContent = `You have: ${allToDosToFilter.length} ToDos`;
    }

    if (currentPage === "Today") {
      projects.todoList.forEach((project) => {
        allToDosToFilter.push(...project.todos);
      });
      const filtered = allToDosToFilter.filter(
        (todo) => todo.dueDate === format(new Date(), "yyyy-MM-dd")
      );
      filtered.forEach((todo) => {
        toDosNumb += 1;
        const toDoCard = createToDoCard(todo);
        toDosContainer.textContent = "";
        allTodos.append(toDoCard);
      });
      pageTitle.textContent = `Today's ToDos: ${toDosNumb} ToDos`;
      toDosContainer.append(allTodos);
    }

    if (currentPage === "Upcoming") {
      const dates = getUpcomingDates();
      projects.todoList.forEach((project) => {
        allToDosToFilter.push(...project.todos);
      });
      allToDosToFilter.forEach((todo) => {
        if (dates.includes(todo.dueDate)) {
          toDosNumb += 1;
          const toDoCard = createToDoCard(todo);
          toDosContainer.textContent = "";
          allTodos.append(toDoCard);
        }
        pageTitle.textContent = `Today's ToDos: ${toDosNumb} ToDos`;
      });
      toDosContainer.append(allTodos);
    }

    if (currentPage === "Important") {
      projects.todoList.forEach((project) => {
        allToDosToFilter.push(...project.todos);
      });
      allToDosToFilter.forEach((todo) => {
        if (todo.priority === "High Priority") {
          toDosNumb += 1;
          const toDoCard = createToDoCard(todo);
          toDosContainer.textContent = "";
          allTodos.append(toDoCard);
        }
        pageTitle.textContent = `Important ToDos: ${toDosNumb} ToDos`;
      });
      toDosContainer.append(allTodos);
    }

    if (currentPage === `${pagePId}-Project`) {
      const currentProjectTodos = projects.todoList[pagePId].todos;
      currentProjectTodos.forEach((todo, index) => {
        todo.id = index;
        const toDoCard = createToDoCard(todo);
        toDosContainer.textContent = "";
        allTodos.append(toDoCard);
      });
      toDosContainer.append(allTodos);
    }

    projects.saveProjects();
  };

  //Render Pages

  const mainContent = document.querySelector("#main-content");
  const mainContainer = document.querySelector("#main-container");

  const renderAllProjectsPage = () => {
    projects.saveProjects();
    mainContainer.setAttribute("data-page", "All Projects");
    mainContent.textContent = "";

    const pageHeader = createDiv("page-header");
    const pageTitle = createH2("page-title");
    const projectsNumb = projects.todoList.length;
    pageTitle.textContent = `You have: ${projectsNumb} projects`;
    const cardsContainer = createDiv("cards-container");

    projects.todoList.forEach((project, index) => {
      project.id = index;

      const projectCard = createProjectCard(project, index);
      projectCard.addEventListener("click", () =>
        renderSingleProjectPage(project, index)
      );

      cardsContainer.append(projectCard);
    });

    mainContent.textContent = "";
    pageHeader.append(pageTitle);

    mainContent.append(pageHeader, cardsContainer);
  };

  const renderSingleProjectPage = (project, index) => {
    mainContainer.setAttribute("data-page", `${index}-Project`);
    const pageDiv = createDiv("project-page");
    pageDiv.setAttribute("data-page-index", index);
    const pageHeaderDiv = createDiv("page-header");
    const projectName = createH2("project-name-header");
    projectName.textContent = project.name;
    const projectDesc = createPara("project-description-header");

    if (project.description === "") {
      projectDesc.textContent = "Project has no description";
    } else {
      projectDesc.textContent = project.description;
    }

    const projectActions = createDiv("project-actions");
    const projectEditBtn = createButton("project-edit");
    projectEditBtn.textContent = "Edit";
    projectEditBtn.setAttribute("data-edit-project-btn", "");
    projectEditBtn.setAttribute("data-index", index);
    projectEditBtn.addEventListener("click", () =>
      handlers.openEditProjectModal(project)
    );

    const projectDeleteBtn = createButton("project-delete");
    projectDeleteBtn.textContent = "Delete";
    projectDeleteBtn.setAttribute("data-delete-project-btn", "");
    projectDeleteBtn.setAttribute("data-index", index);
    projectDeleteBtn.addEventListener("click", () =>
      projects.deleteCurrentProject(index)
    );

    const toDoSection = createDiv("todos-section");
    const toDoSectionActions = createDiv("todos-section-actions");
    toDoSectionActions.setAttribute("data-color-project-id", index);
    toDoSectionActions.style.backgroundColor = project.color;
    const addToDoBtn = createButton("add-todo-btn");
    addToDoBtn.textContent = `Add New ToDo`;
    addToDoBtn.setAttribute("data-add-todo-btn", "");
    addToDoBtn.addEventListener("click", () => handlers.openNewToDoModal());

    const toDosContainer = createDiv("todos-container");
    toDosContainer.setAttribute("data-todos-container", "");

    mainContent.textContent = "";

    projectActions.append(projectEditBtn, projectDeleteBtn);
    pageHeaderDiv.append(projectName, projectDesc, projectActions);
    pageDiv.append(pageHeaderDiv);

    toDoSectionActions.append(addToDoBtn);
    toDoSection.append(toDoSectionActions, toDosContainer);

    mainContent.append(pageDiv, toDoSection);
    renderToDos();
  };

  const renderAllToDosPage = () => {
    mainContainer.setAttribute("data-page", "All ToDos");
    const pageHeader = createDiv("page-header");
    const pageTitle = createH2("page-title");
    const toDosContainer = createDiv("todos-container");

    mainContent.textContent = "";

    pageHeader.append(pageTitle);
    mainContent.append(pageHeader, toDosContainer);

    renderToDos();
  };

  const renderTodayPage = () => {
    mainContainer.setAttribute("data-page", "Today");
    const pageHeader = createDiv("page-header");
    const pageTitle = createH2("page-title");
    const toDosContainer = createDiv("todos-container");

    mainContent.textContent = "";

    pageHeader.append(pageTitle);
    mainContent.append(pageHeader, toDosContainer);
    renderToDos();
  };

  const renderUpcomingPage = () => {
    mainContainer.setAttribute("data-page", "Upcoming");
    const pageHeader = createDiv("page-header");
    const pageTitle = createH2("page-title");
    const toDosContainer = createDiv("todos-container");

    mainContent.textContent = "";

    pageHeader.append(pageTitle);
    mainContent.append(pageHeader, toDosContainer);
    renderToDos();
  };

  const getUpcomingDates = () => {
    const upcomingDates = eachDayOfInterval({
      start: addDays(new Date(), 1),
      end: addDays(new Date(), 7),
    });
    upcomingDates.forEach((date, index) =>
      upcomingDates.splice(index, 1, format(date, "yyyy-MM-dd"))
    );
    return upcomingDates;
  };

  const renderImportantPage = () => {
    mainContainer.setAttribute("data-page", "Important");
    const pageHeader = createDiv("page-header");
    const pageTitle = createH2("page-title");
    const toDosContainer = createDiv("todos-container");

    mainContent.textContent = "";

    pageHeader.append(pageTitle);
    mainContent.append(pageHeader, toDosContainer);
    renderToDos();
  };

  return {
    createAddProjectModal,
    createEditProjectModal,
    createAddToDoModal,
    createEditToDoModal,
    renderAllProjectsPage,
    renderSingleProjectPage,
    renderToDos,
    renderAllToDosPage,
    renderTodayPage,
    renderUpcomingPage,
    renderImportantPage,
  };
})();

export default domElements;
