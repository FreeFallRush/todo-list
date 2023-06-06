import domElements from "./dom-elements";

const projects = (() => {
  let todoList = [];

  class Project {
    constructor(name, description, color) {
      this.name = name;
      this.description = description;
      this.color = color;
      this.todos = [];
    }
  }

  const createNewProject = (name, description, color) => {
    const project = new Project(name, description, color);
    todoList.push(project);
    domElements.renderAllProjectsPage();
  };

  const editCurrentProject = (index, newName, newDescription, newColor) => {
    const currentProject = projects.todoList[index];

    currentProject.name = newName;
    currentProject.description = newDescription;
    currentProject.color = newColor;

    domElements.renderAllProjectsPage();
  };

  const deleteCurrentProject = (index) => {
    todoList.splice(index, 1);
    domElements.renderAllProjectsPage();
  };

  return {
    todoList,
    createNewProject,
    editCurrentProject,
    deleteCurrentProject,
  };
})();

export default projects;
