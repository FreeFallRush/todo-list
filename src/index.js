import "./style.css";
import handlers from "./js/handlers";
import domElements from "./js/dom-elements";

const addNewProjectBtn = document.querySelector("[data-add-new-project]");
const sidebarLinks = document.querySelectorAll(".sidebar-link");

addNewProjectBtn.addEventListener("click", () => {
  handlers.openNewProjectModal();
});

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    switch (link.innerText) {
      case "All Projects":
        domElements.renderAllProjectsPage();
        break;
    }
  });
});

domElements.renderAllProjectsPage();
handlers.toggleSidebar();
