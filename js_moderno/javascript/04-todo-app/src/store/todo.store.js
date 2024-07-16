// Estado global de la aplicacion
import { Todo } from "../todos/models/todo.model";

const Filters = {
  All: "all",
  Completed: "completed",
  Pending: "pending",
};

const state = {
  todos: [
    new Todo("Piedra del alma"),
    new Todo("Piedra del infinito"),
    new Todo("Piedra del tiempo"),
    new Todo('Piedra del poder'),
    new Todo('Piedra del campo'),
    new Todo('Piedra del destino')
  ],
  filter: Filters.All,
};

const initStore = () => {
  console.log("Init store...");
  console.log("state: ", state);
};

const loadStore = () => {
  throw new Error("Not implemented");
};

const saveStateToLocalStorage = () => {
  localStorage
}

const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return state.todos;
      break;

    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);
      break;

    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);
      break;

    default:
      throw new Error(`Option ${filter} is not valid`);
      break;
  }
};

/**
 *
 * @param {String} description - todo description
 */
const addTodo = (description) => {
  if (!description) throw new Error("Description is required");

  state.todos.push(new Todo(description));
};

/**
 *
 * @param {String} todoId - todo unique identifier
 */
const toggleTodo = (todoId) => {
  state.todos = state.todos.map(todo => {
    if(todo.id === todoId) {
      todo.done = !todo.done;
    }

    return todo;
  });
};

/**
 *
 * @param {String} todoId - todo unique identifier
 */
const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => todo.done);
};

/**
 *
 * @param {Filters} newFilter - Filer to set: All, Completed, Pending
 */
const setFilter = (newFilter = Filters.All) => {
  if (Object.keys(Filters).includes(newFilter))
    return (state.filter = newFilter);

  throw new Error(`Option ${newFilter} is not valid`);
};

const getCurrentFilter = () => {
  return state.filter.toString();
};

export default {
  initStore,
  loadStore,
  getTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteCompleted,
  setFilter,
  getCurrentFilter,
};
