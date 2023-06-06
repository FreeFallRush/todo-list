import "./style.css";
import handlers from "./js/handlers";

const addNewProjectBtn = document.querySelector("[data-add-new-project]");

addNewProjectBtn.addEventListener("click", () => {
  handlers.openNewProjectModal();
});

handlers.toggleSidebar();
