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
  ],
  filter: Filters.All,
};

const initStore = () => {
  console.log("Init store...");
  console.log("state: ", state);
};


const loadStore = () => {
  throw new Error('Not implemented');
}

/**
 * 
 * @param {String} description - todo description
 */
const addTodo = (description) => {
  throw new Error('Not implemented');
}

/**
 * 
 * @param {String} todoId - todo unique identifier
 */
const toggleTodo = ( todoId) => {
  throw new Error('Not implemented');
} 

/**
 * 
 * @param {String} todoId - todo unique identifier
 */
const deleteTodo = ( todoId) => {
  throw new Error('Not implemented');
}

const deleteCompleted = () => {
  throw new Error('Not implemented');
}

const setFilter = (newFilter = Filters.All) => {
  throw new Error('Not implemented');
}

const getCurrentFilter = () => {
  throw new Error('Not implemented');
}

export default {
  initStore,
  loadStore,
  toggleTodo,
  deleteTodo,
  deleteCompleted,
  setFilter,
  getCurrentFilter
};
