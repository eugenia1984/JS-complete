import { Todo } from "../models/todo.model";

/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHtml = (todo) => {
  if( !todo) throw new Error('A Todo object is required');

  const html = `<h>${todo.description}</h>`

  const liElement = document.createElement('li');
  liElement.innerHTML = html;

  return liElement;
}