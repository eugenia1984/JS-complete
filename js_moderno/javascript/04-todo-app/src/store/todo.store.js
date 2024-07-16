// Estado global de la aplicacion
import { Todo } from "../todos/models/todo.model";

export const Filters = {
  All: "all",
  Completed: "completed",
  Pending: "pending",
};

const state = {
  todos: [
    new Todo("Learn JavaScript"),
    new Todo("Learn React"),
    new Todo("Learn Next.js"),
  ],
  filter: Filters.All,
};

const initStore = () => {
  loadStore();
  console.log("Init store...");
};

const loadStore = () => {
  if (!localStorage.getItem("state")) return;

  const { todos = [], filter = Filters.All } = JSON.stringify(
    localStorage.getItem("state")
  );
  state.todos = todos;
  state.filter = filter;
};

const saveStateToLocalStorage = () => {
  localStorage.setItem("state", JSON.stringify(state));
};

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

  saveStateToLocalStorage();
};

/**
 *
 * @param {String} todoId - todo unique identifier
 */
const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }

    return todo;
  });

  saveStateToLocalStorage();
};

/**
 *
 * @param {String} todoId - todo unique identifier
 */
const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
  saveStateToLocalStorage();
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => !todo.done);
  saveStateToLocalStorage();
};

/**
 *
 * @param {Filters} newFilter - Filer to set: All, Completed, Pending
 */
const setFilter = (newFilter = Filters.All) => {
  if (Object.keys(Filters).includes(newFilter)) {
    saveStateToLocalStorage();
    return (state.filter = newFilter);
  }

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
