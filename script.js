let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let taskUL = document.querySelector("#items");
let completeUL = document.querySelector(".complete-list ul");

let createTask = function (task) {
    let listItem = document.createElement("li");
    let checkbox = document.createElement("input");
    let label = document.createElement("label");
    label.innerText = task;
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    return listItem;
}

let addTask = function (event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    taskUL.appendChild(listItem);
    newTask.value = "";

    bindInCompleteTask(listItem, completeTask);
}

let completeTask = function () {
    let listItem = this.parentNode;
    let checkBox = listItem.querySelector("input[type='checkbox']");
    listItem.removeChild(checkBox);
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";
    listItem.appendChild(deleteBtn);
    completeUL.appendChild(listItem);

    bindCompleteTask(listItem, deleteTask);
}

let deleteTask = function () {
    let listItem = this.parentNode;
    completeUL.removeChild(listItem);
}

let bindCompleteTask = function (listItem, clickDeleteButton) {
    let deleteButton = listItem.querySelector('.delete');
    deleteButton.onclick = clickDeleteButton;
}

let bindInCompleteTask = function (listItem, clickCheckBox) {
    let checkBox = listItem.querySelector("input[type='checkbox']");
    checkBox.onchange = clickCheckBox;
}

for (let i = 0; i < taskUL.children.length; i++) {
    bindInCompleteTask(taskUL.children[i], completeTask);
}

for (let i = 0; i < completeUL.children.length; i++) {
    bindCompleteTask(completeUL.children[i], deleteTask);
}

form.addEventListener("submit", addTask);