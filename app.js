let taskInput = document.getElementById("new-task");//Add a new task.
let addButton = document.querySelector(".task__button");//first button
let incompleteTaskHolder = document.getElementById("incomplete-tasks");//ul of #incompleteTasks
let completedTasksHolder = document.getElementById("completed-tasks");//completed-tasks

function createNewTaskElement(taskString) {
    const listItem = document.createElement("li");
    listItem.className = "task-list__item";

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "task-list__checkbox";

    const label = document.createElement("label");
    label.className = "task-list__label";
    label.textContent = taskString;

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "task-list__input";

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.className = "task-list__button task-list__button--edit";

    const deleteButton = document.createElement("button");
    deleteButton.className = "task-list__button task-list__button--delete";
    const deleteButtonImg = document.createElement("img");
    deleteButtonImg.src = './remove.svg';
    deleteButton.appendChild(deleteButtonImg);

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}


let addTask = function() {
    if (!taskInput.value) return;
    let listItem = createNewTaskElement(taskInput.value);

    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value = "";
}

let editTask = function() {

    let listItem = this.parentNode;
    let editInput = listItem.querySelector('input[type = text]');
    let label = listItem.querySelector(".task-list__label");
    let editBtn = listItem.querySelector(".task-list__button--edit");
    let containsClass = listItem.classList.contains("task-list__item--edit-mode");

    if(containsClass) {
        label.innerText = editInput.value;
        editBtn.innerText = "Edit";
    } else {
        editInput.value = label.innerText;
        editBtn.innerText = "Save";
    }

    listItem.classList.toggle("task-list__item--edit-mode");
};

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;

    ul.removeChild(listItem);
}

let taskCompleted = function() {
    let listItem = this.parentNode;

    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}


let taskIncomplete = function(){
    let listItem = this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
}


addButton.addEventListener("click",addTask);


let bindTaskEvents  =  function(taskListItem,checkBoxEventHandler){
    let checkBox  =  taskListItem.querySelector("input[type = checkbox]");
    let editButton  =  taskListItem.querySelector(".task-list__button--edit");
    let deleteButton  =  taskListItem.querySelector(".task-list__button--delete");

    editButton.onclick  =  editTask;
    deleteButton.onclick  =  deleteTask;
    checkBox.onchange  =  checkBoxEventHandler;
}

for (let i = 0; i < incompleteTaskHolder.children.length; i++){
    bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
}

for (let i = 0; i < completedTasksHolder.children.length; i++){
    bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}