import "./style.css";
import handlers from "./js/handlers";
import domElements from "./js/dom-elements";

const addNewProjectBtn = document.querySelector("[data-add-new-project]");

addNewProjectBtn.addEventListener("click", () => {
  handlers.openNewProjectModal();
});

domElements.renderAllProjectsPage();
handlers.toggleSidebar();
