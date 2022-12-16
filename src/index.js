/* eslint-disable linebreak-style */
import './style.css';
import Todos from './modules/todos.js';
import {
  formInput, btnSubmit, showMsg, filterButton, todoContainer,
} from './modules/domSelector.js';

import arrowIcon from './assets/enter-24.png';
import { getAfterElement } from './modules/utils.js';

const todos = new Todos();

formInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    todos.onSubmit();
  } else {
    showMsg.innerHTML = '';
    showMsg.classList.remove('form-error');
    formInput.classList.remove('invalid');
  }
});

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  todos.onSubmit();
});

filterButton.addEventListener('click', () => {
  todos.onFilterCompletedTodos();
});

todoContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
  const getAfterElementPosition = getAfterElement(todoContainer, e.clientY);
  const dragging = todoContainer.querySelector('.dragging');

  if (dragging == null) {
    todoContainer.appendChild(dragging);
  } else {
    todoContainer.insertBefore(dragging, getAfterElementPosition);
  }
});

window.onload = () => {
  todos.render();
  document.querySelector('.btn-submit').innerHTML = `<img src='${arrowIcon}' alt='submit'/>`;
};
