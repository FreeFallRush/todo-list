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

    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      e.preventDefault();
      modalForm.removeEventListener("submit", addNewProjectEvent);
      modalForm.removeEventListener("submit", editProjectEvent);

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
    const index = editProjectBtn.getAttribute("data-index");
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

  return {
    toggleSidebar,
    openNewProjectModal,
    openEditProjectModal,
  };
})();
export default handlers;
