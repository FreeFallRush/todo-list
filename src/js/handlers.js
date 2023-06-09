import domElements from "./dom-elements";
import projects from "./project";
import todos from "./todo";

const handlers = (() => {
  const toggleSidebar = () => {
    const nav = document.querySelector("nav");
    const toggle_btn = document.getElementById("toggle-btn");
    const content = document.getElementById("main-container");

    toggle_btn.onclick = function () {
      nav.classList.toggle("hide");
      content.classList.toggle("expand");
    };
  };

  //Project Modals

  const modal = document.querySelector("[data-modal]");
  const closeModalBtn = document.querySelector("[data-close-modal]");
  const modalForm = document.querySelector("[data-form]");

  closeModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modalForm.removeEventListener("submit", addNewProjectEvent);
    modalForm.removeEventListener("submit", editProjectEvent);
    modalForm.removeEventListener("submit", addNewToDoEvent);
    modalForm.removeEventListener("submit", addEditToDoEvent);
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      e.preventDefault();
      modalForm.removeEventListener("submit", addNewProjectEvent);
      modalForm.removeEventListener("submit", editProjectEvent);
      modalForm.removeEventListener("submit", addNewToDoEvent);
      modalForm.removeEventListener("submit", addEditToDoEvent);
      modal.classList.add("hidden");
    }
  });

  //Add Project

  const openNewProjectModal = () => {
    domElements.createAddProjectModal();
    modalForm.addEventListener("submit", addNewProjectEvent);
    modal.classList.remove("hidden");
  };

  const addNewProjectEvent = (e) => {
    e.preventDefault();

    const nameInput = document.querySelector("[data-new-project-name]");
    const descriptionInput = document.querySelector(
      "[data-new-project-description]"
    );
    const colorInput = document.querySelector("[data-project-color]");
    if (nameInput.value == -"") {
      nameInput.value = "Project Unnamed";
    }

    const projectName = nameInput.value;
    const projectDescription = descriptionInput.value;
    const projectColor = colorInput.value;

    if (projectName !== "") {
      projects.createNewProject(projectName, projectDescription, projectColor);
      domElements.renderAllProjectsPage();
    }
    modalForm.removeEventListener("submit", addNewProjectEvent);
    modal.classList.add("hidden");
  };

  //Edit Project

  const openEditProjectModal = (project) => {
    domElements.createEditProjectModal();

    const editNameInput = document.querySelector("[data-edit-project-name]");
    const editDescInput = document.querySelector(
      "[data-edit-project-description]"
    );
    const editColorInput = document.querySelector("[data-edit-project-color]");

    editNameInput.value = project.name;
    editDescInput.value = project.description;
    editColorInput.value = project.color;

    modalForm.addEventListener("submit", editProjectEvent);
    modal.classList.remove("hidden");
  };

  const editProjectEvent = (e) => {
    e.preventDefault();
    const editNameInput = document.querySelector("[data-edit-project-name]");
    const editDescInput = document.querySelector(
      "[data-edit-project-description]"
    );
    const editColorInput = document.querySelector("[data-edit-project-color]");
    const editProjectBtn = document.querySelector("[data-edit-project-btn]");
    const projectId = document
      .querySelector(".project-page")
      .getAttribute("data-page-index");
    editColorInput.addEventListener("change", (e) => {
      return (editColorInput.value = e.target.value);
    });

    if (editNameInput.value === "") {
      editNameInput.value = "Project has no name";
    }

    projects.editCurrentProject(
      projectId,
      editNameInput.value,
      editDescInput.value,
      editColorInput.value
    );

    modal.classList.add("hidden");
    modalForm.removeEventListener("submit", editProjectEvent);
  };

  //Add ToDo

  const openNewToDoModal = () => {
    domElements.createAddToDoModal();
    modalForm.addEventListener("submit", addNewToDoEvent);
    modal.classList.remove("hidden");
  };

  const addNewToDoEvent = (e) => {
    e.preventDefault();

    const projectId = document
      .querySelector(".project-page")
      .getAttribute("data-page-index");
    const taskNameInput = document.querySelector("[data-new-todo-name]");
    const dueDateInput = document.querySelector("[data-due-date-input]");
    const selectPriorityInput = document.querySelector(
      "[data-select-priority]"
    );

    todos.createNewToDo(
      projectId,
      taskNameInput.value,
      dueDateInput.value,
      selectPriorityInput.value
    );

    modal.classList.add("hidden");
    modalForm.removeEventListener("submit", addNewToDoEvent);
  };

  //Edit ToDo

  const openEditToDoModal = (todo) => {
    domElements.createEditToDoModal();
    const editToDoNameInput = document.querySelector("[data-edit-todo-name]");
    editToDoNameInput.value = todo.title;

    const editDueDateInput = document.querySelector(
      "[data-edit-duedate-input]"
    );
    editDueDateInput.value = todo.dueDate;

    const editPrioritySelect = document.querySelector("[data-edit-select]");
    editPrioritySelect.value = todo.priority;

    modalForm.addEventListener("submit", addEditToDoEvent);
    modal.classList.remove("hidden");
    modalForm.taskIndex = todo.id;
    modalForm.projectIndex = todo.projectId;
  };

  const addEditToDoEvent = (e) => {
    e.preventDefault();

    const editToDoNameInput = document.querySelector("[data-edit-todo-name]");
    const editDueDateInput = document.querySelector(
      "[data-edit-duedate-input]"
    );
    const editPrioritySelect = document.querySelector("[data-edit-select]");

    todos.editCurrentToDo(
      e.currentTarget.projectIndex,
      e.currentTarget.taskIndex,
      editToDoNameInput.value,
      editDueDateInput.value,
      editPrioritySelect.value
    );

    const currentPage = document
      .querySelector("#main-container")
      .getAttribute("data-page");
    if (currentPage === "All ToDos") {
      domElements.renderAllToDosPage();
    } else if (currentPage === "Today") {
      domElements.renderTodayPage();
    } else if (currentPage === "Upcoming") {
      domElements.renderUpcomingPage();
    } else if (currentPage === "Important") {
      domElements.renderImportantPage();
    } else if (currentPage === "Expired") {
      domElements.renderExpiredPage();
    } else {
      domElements.renderSingleProjectPage(
        projects.todoList[e.currentTarget.projectIndex],
        e.currentTarget.projectIndex
      );
    }

    modal.classList.add("hidden");
    modalForm.removeEventListener("submit", addEditToDoEvent);
  };

  return {
    toggleSidebar,
    openNewProjectModal,
    openEditProjectModal,
    openNewToDoModal,
    openEditToDoModal,
  };
})();
export default handlers;
