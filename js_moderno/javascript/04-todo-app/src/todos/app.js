import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const elementIDs = {
  TodoList: '.todo-list',
  NewTodoInput: '#new-todo-input'
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(elementIDs.TodoList, todos );
  }

  // When App is loaded
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  // HTML References
  const newDescriptionInput = document.querySelector(elementIDs.NewTodoInput);
  const todoListUL = document.querySelector(elementIDs.TodoList);

  // Listeners
  newDescriptionInput.addEventListener('keyup', (event) => {
    if(event.keyCode !== 13) return;
    if( event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = '';
  });

  todoListUL.addEventListener('click', (event) => {
    const element = event.target.closest('[data-id]');
    todoStore.toggleTodo(element.getAttribute('data-id'));
    displayTodos();
  })
}