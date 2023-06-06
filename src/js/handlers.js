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

    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      e.preventDefault();

      modal.classList.add("hidden");
    }
  });

  //Add Project

  const openNewProjectModal = () => {
    domElements.createAddProjectModal();

    modal.classList.remove("hidden");
  };

  return {
    toggleSidebar,
    openNewProjectModal,
  };
})();
export default handlers;
