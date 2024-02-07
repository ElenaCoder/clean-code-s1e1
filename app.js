//Document is the DOM can be accessed in the console with document.window.
// Tree is from the top, html, body, p etc.

//Problem: User interaction does not provide the correct results.
//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.


// Event handling, user interaction is what starts the code execution.

let taskInput = document.getElementById("new-task");//Add a new task.
let addButton = document.querySelector(".task__button");//first button
let incompleteTaskHolder = document.getElementById("incomplete-tasks");//ul of #incompleteTasks
let completedTasksHolder = document.getElementById("completed-tasks");//completed-tasks


//New task list item
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
    //Create a new list item with the text from the #new-task:
    if (!taskInput.value) return;
    let listItem = createNewTaskElement(taskInput.value);

    //Append listItem to incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value = "";

}

//Edit an existing task.

let editTask = function() {

    let listItem = this.parentNode;

    let editInput = listItem.querySelector('input[type = text]');
    let label = listItem.querySelector(".task-list__label");
    let editBtn = listItem.querySelector(".task-list__button--edit");
    let containsClass = listItem.classList.contains("task-list__item--edit-mode");
    //If class of the parent is .edit mode
    if(containsClass){

        //switch to .edit mode
        //label becomes the inputs value.
        label.innerText = editInput.value;
        editBtn.innerText = "Edit";
    }else{
        editInput.value = label.innerText;
        editBtn.innerText = "Save";
    }

    //toggle .edit mode on the parent.
    listItem.classList.toggle("task-list__item--edit-mode");
};


let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;

    ul.removeChild(listItem);
}


//Mark task completed
let taskCompleted = function() {
    let listItem = this.parentNode;

    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}


let taskIncomplete = function(){

    //Mark task as incomplete.
    //When the checkbox is unchecked
    //Append the task list item to the #incompleteTasks.
    let listItem = this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
}

//The glue to hold it all together.

//Set the click handler to the addTask function.
addButton.addEventListener("click",addTask);


let bindTaskEvents  =  function(taskListItem,checkBoxEventHandler){
    //select ListItems children
    let checkBox  =  taskListItem.querySelector("input[type = checkbox]");
    let editButton  =  taskListItem.querySelector(".task-list__button--edit");
    let deleteButton  =  taskListItem.querySelector(".task-list__button--delete");


    //Bind editTask to edit button.
    editButton.onclick  =  editTask;
    //Bind deleteTask to delete button.
    deleteButton.onclick  =  deleteTask;
    //Bind taskCompleted to checkBoxEventHandler.
    checkBox.onchange  =  checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
//for each list item
for (let i  =  0; i < incompleteTaskHolder.children.length; i++){

    //bind events to list items children(tasksCompleted)
    bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
}




//cycle over completedTasksHolder ul list items
for (let i  =  0; i < completedTasksHolder.children.length; i++){
    //bind events to list items children(tasksIncompleted)
    bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}




// Issues with usability don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Change edit to save when you are in edit mode.