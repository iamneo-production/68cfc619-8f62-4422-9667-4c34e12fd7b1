
import React, { useEffect } from 'react';
import './Quick.css';

function Quick() {
  useEffect(() => {
    const taskInput = document.getElementById("new-task");
    const addButton = document.getElementsByTagName("button")[0];
    const incompleteTasksHolder = document.getElementById("incomplete-tasks");
    const completedTasksHolder = document.getElementById("completed-tasks");

    const createNewTaskElement = (taskString) => {
      const listItem = document.createElement("li");
      const checkBox = document.createElement("input");
      const label = document.createElement("label");
      const editInput = document.createElement("input");
      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");

      checkBox.type = "checkbox";
      editInput.type = "text";

      editButton.innerText = "Edit";
      editButton.className = "editBtn";
      deleteButton.innerText = "Delete";
      deleteButton.className = "deleteBtn";

      label.innerText = taskString;

      listItem.appendChild(checkBox);
      listItem.appendChild(label);
      listItem.appendChild(editInput);
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);

      return listItem;
    }

    const addTask = () => {
      const taskString = taskInput.value.trim();
      if (taskString !== "") {
        const listItem = createNewTaskElement(taskString);
        incompleteTasksHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskCompleted);
        taskInput.value = "";
      }
    }

    const editTask = function() {
      const listItem = this.parentNode;
      const editInput = listItem.querySelector("input[type=text]");
      const label = listItem.querySelector("label");
      const containsClass = listItem.classList.contains("editMode");

      if (containsClass) {
        label.innerText = editInput.value;
      } else {
        editInput.value = label.innerText;
      }

      listItem.classList.toggle("editMode");
    }

    const deleteTask = function() {
      const listItem = this.parentNode;
      const ul = listItem.parentNode;
      ul.removeChild(listItem);
    }

    const taskCompleted = function() {
      const listItem = this.parentNode;
      completedTasksHolder.appendChild(listItem);
      bindTaskEvents(listItem, taskIncomplete);
    }

    const taskIncomplete = function() {
      const listItem = this.parentNode;
      incompleteTasksHolder.appendChild(listItem);
      bindTaskEvents(listItem, taskCompleted);
    }

    const bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
      const checkBox = taskListItem.querySelector("input[type=checkbox]");
      const editButton = taskListItem.querySelector("button.editBtn");
      const deleteButton = taskListItem.querySelector("button.deleteBtn");

      editButton.onclick = editTask;
      deleteButton.onclick = deleteTask;
      checkBox.onchange = checkBoxEventHandler;
    }

    addButton.addEventListener("click", addTask);

    for (let i = 0; i < incompleteTasksHolder.children.length; i++) {
      bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
    }

    for (let i = 0; i < completedTasksHolder.children.length; i++) {
      bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
    }
  }, []);

  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString(undefined, options);
  }

  return (
    <div className='jimin'>
      <div className="container55">
        <h2>TO-DO LIST</h2>
        <h4>{getCurrentDate()}</h4>
        <h3>Add Task</h3>
        <p>
          <input id="new-task" type="text" />
          <button>Add</button>
        </p>

        <h3>To-Do</h3>
        <ul className="todo-list" id="incomplete-tasks">
          <li>
            <input type="checkbox" />
            <label>Demo Task 1</label>
            <input type="text" />
            <button className="editBtn">Edit</button>
            <button className="deleteBtn">Delete</button>
          </li>
          <li>
            <input type="checkbox" />
            <label>Demo Task 2</label>
            <input type="text" value="Go Shopping" />
            <button className="editBtn">Edit</button>
            <button className="deleteBtn">Delete</button>
          </li>
        </ul>

        <h3>Completed</h3>
        <ul className="todo-list" id="completed-tasks">
          <li>
            <input type="checkbox" checked />
            <label>Demo Task 3</label>
            <input type="text" />
            <button className="editBtn">Edit</button>
            <button className="deleteBtn">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Quick;

