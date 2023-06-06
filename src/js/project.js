import domElements from "./dom-elements";

const projects = (() => {
  let todoList = [];

  if (localStorage.getItem("todoProjects") === null) {
    todoList = [
      {
        name: "Keep Going",
        description: "something is better than nothing",
        color: "#93CDF0",
        todos: [],
      },
    ];
  } else {
    const loadProjectsFromStorage = JSON.parse(
      localStorage.getItem("todoProjects")
    );
    todoList = loadProjectsFromStorage;
  }

  const saveProjects = () => {
    localStorage.setItem("todoProjects", JSON.stringify(projects.todoList));
  };

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
    domElements.renderSingleProjectPage(currentProject, currentProject.id);
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
    saveProjects,
  };
})();

export default projects;
