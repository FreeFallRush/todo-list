import domElements from "./dom-elements";
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

    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      e.preventDefault();
      modalForm.removeEventListener("submit", addNewProjectEvent);

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

    if (nameInput.value === "") {
      nameInput.value = "Project Unnamed";
    }

    if (projectName !== "") {
      projects.createNewProject(
        nameInput.value,
        descriptionInput.value,
        colorInput.value
      );
      domElements.renderAllProjectsPage();
    }

    modalForm.removeEventListener("submit", addNewProjectEvent);
    modal.classList.add("hidden");
  };

  return {
    toggleSidebar,
    openNewProjectModal,
  };
})();
export default handlers;