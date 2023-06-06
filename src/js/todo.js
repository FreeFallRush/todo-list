import projects from "./project";
import domElements from "./dom-elements";

const todos = (() => {
  class ToDo {
    constructor(projectId, title, dueDate, priority) {
      this.projectId = projectId;
      this.title = title;
      this.dueDate = dueDate;
      this.priority = priority;
    }
  }

  const createNewToDo = (projectId, title, dueDate, priority) => {
    const todo = new ToDo(projectId, title, dueDate, priority);
    projects.todoList[projectId].todos.push(todo);
    domElements.renderToDos();
  };

  const editCurrentToDo = (
    projectId,
    index,
    newTitle,
    newDueDate,
    newPriority
  ) => {
    projects.todoList[projectId].todos[index].title = newTitle;
    projects.todoList[projectId].todos[index].dueDate = newDueDate;
    projects.todoList[projectId].todos[index].priority = newPriority;
    domElements.renderToDos();
  };

  const deleteCurrentToDo = (projectId, index) => {
    projects.todoList[projectId].todos.splice(index, 1);
    domElements.renderToDos();
  };

  return {
    createNewToDo,
    editCurrentToDo,
    deleteCurrentToDo,
  };
})();
export default todos;
