"use strict";

// Test Data
const task1 = {
  id: 70,
  task_title: "Learn Java_Script",
  completed: false,
};
const task2 = {
  id: 70,
  task_title: "Learn C++",
  completed: false,
};
// Store Task Data

const tasks = [];

// Selecting Elements
const taskContainer = document.querySelector(".task-container");
const addTaskBtn = document.querySelector(".add-task-btn");
const inputField = document.getElementById("input-task");

// Funtions

// Add Task Html
taskContainer.innerHTML = "";

let taskCounter = 0;
const showTask = function (tasks) {
  taskContainer.innerHTML = "";
  tasks.forEach(function (currentTask) {
    const completedCheckMark = currentTask.completed ? "task-completed" : "";
    const completedTitle = currentTask.completed ? "task-completed-line" : "";

    let str = `<div class="tasks" id="${currentTask.id}">
            <div class="task-wrapper">
              <div class="check-mark ${completedCheckMark}"></div>
              <div class="task-title ${completedTitle}">${currentTask.task_title}</div>
            </div>
            <div class="task-edit-wrapper">
              <div class="task-edit fa fa-pencil"></div>
              <div class="task-delete fa fa-trash"></div>
            </div>
          </div>`;
    taskContainer.insertAdjacentHTML("afterbegin", str);
  });
};

// Funtionality
// showTask(tasks);
// Add Task Button

addTaskBtn.addEventListener("click", function () {
  const taskTitle = inputField.value;
  if (taskTitle.trim() !== "") {
    tasks.push({ id: taskCounter, task_title: taskTitle, completed: false });
    showTask(tasks);
    taskCounter++;
  }
  inputField.value = "";
  taskLeft();
});

// Mark Complted Funtionality

// Slecting Check-MArk

const checkMark = document.querySelectorAll(".check-mark");
const taskTitle = document.querySelectorAll(".task-title");
const taskElement = document.querySelectorAll(".tasks");
// Task Completed UI

taskContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("check-mark")) {
    e.target.classList.toggle("task-completed");
    e.target.nextElementSibling.classList.toggle("task-completed-line");
    const currentTaskObject = tasks.find(function (currTask) {
      return (
        currTask.id ===
        Number(e.target.parentElement.parentElement.getAttribute("id"))
      );
    });
    if (
      e.target.classList.contains("task-completed") &&
      e.target.nextElementSibling.classList.contains("task-completed-line")
    ) {
      currentTaskObject.completed = true;
    } else {
      currentTaskObject.completed = false;
    }
  }
  taskLeft();
});

// Active Tasks Funtionaluty

// Selecting Elements

const activeBtn = document.querySelector(".active-wrapper");

activeBtn.addEventListener("click", function () {
  const activeTasks = tasks.filter((currTask) => currTask.completed === false);
  showTask(activeTasks);
  taskLeft();
});

// Completed Tasks Funtionality

const completedBtn = document.querySelector(".completed-wrapper");

completedBtn.addEventListener("click", function () {
  const activeTasks = tasks.filter((currTask) => currTask.completed === true);
  showTask(activeTasks);
  taskLeft();
});

// Alll Task Funtionality

const allBtn = document.querySelector(".all-wrapper");

allBtn.addEventListener("click", function () {
  showTask(tasks);
  taskLeft();
});

// Clear Completed Funtionality

const clearCompleted = document.querySelector(".delete-completed");

clearCompleted.addEventListener("click", function () {
  const activeTasks = tasks.filter((currTask) => currTask.completed === false);
  showTask(activeTasks);
  taskLeft();
});

// Task Left

function taskLeft() {
  const activeTasksUpdate = tasks.filter(
    (currTask) => currTask.completed === false,
  ).length;
  document.querySelector(".number-of-task").textContent =
    `${activeTasksUpdate}`;
}
taskLeft();
