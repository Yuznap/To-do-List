"use strict";
// Store Task Data

const tasks = [];

// Selecting Elements
const taskContainer = document.querySelector(".task-container");
const addTaskBtn = document.querySelector(".add-task-btn");
const inputField = document.getElementById("input-task");

// Funtions

// Add Task Html
taskContainer.innerHTML = "";
let taskCounter = -1;
const addTask = function (taskTitle) {
  let str = `<div class="tasks" id="${taskCounter}">
            <div class="task-wrapper">
              <div class="check-mark"></div>
              <div class="task-title">${taskTitle}</div>
            </div>
            <div class="task-edit-wrapper">
              <div class="task-edit fa fa-pencil"></div>
              <div class="task-delete fa fa-trash"></div>
            </div>
          </div>`;

  if (taskTitle.trim() !== "") {
    taskCounter++;
    taskContainer.insertAdjacentHTML("afterbegin", str);
    tasks.push({ id: taskCounter, task_title: taskTitle, completed: false });
  }
};

addTask("Buy Groceries");
addTask("Buy Sadde");
addTask("heelo");
addTask("Bhai");
addTask("Kese");
addTask("ho");

// Funtionality

// Add Task Button

addTaskBtn.addEventListener("click", function () {
  const taskTitle = inputField.value;
  addTask(taskTitle);
  inputField.value = "";
});

// Mark Complted Funtionality

// Slecting Check-MArk

const checkMark = document.querySelectorAll(".check-mark");
const taskTitle = document.querySelectorAll(".task-title");
const taskElement = document.querySelector(".tasks");

// Task Completed UI

checkMark.forEach(function (curr) {
  curr.addEventListener("click", function () {
    curr.classList.toggle("task-completed");
  });
});

taskContainer.innerHTML = "";
const showTasksObj = function (currTaskObject) {
  let str = `<div class="tasks" id="1">
            <div class="task-wrapper">
              <div class="check-mark"></div>
              <div class="task-title">${currTaskObject.task_title}</div>
            </div>
            <div class="task-edit-wrapper">
              <div class="task-edit fa fa-pencil"></div>
              <div class="task-delete fa fa-trash"></div>
            </div>
          </div>`;
  taskContainer.insertAdjacentHTML("afterbegin", str);
};

tasks.forEach(function (curr) {
  showTasksObj(curr);
});

// Delete feature

// const taskDelete = document.querySelector(".task-delete");

// taskDelete.addEventListener("click", function (e) {
//   console.log("click");
//   const pearent = e.target.parentElement;
//   console.log(parent);
//   const gParent = pearent.parentElement;
//   console.log(gParent);
// });
