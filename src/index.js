// DELIVERABLES // 
// // As a user, I should be able to type a task into the input field.
// // As a user, I should be able to click some form of a submit button.
// // As a user, I expect to see the task string that I provided appear 
// // in the DOM after the submit button has been activated.


// Declare + grab task input field
const taskDescriptionInput = document.querySelector('#new-task-description');

// Declare + grab task list area (the ul under "My Todos")
const taskList = document.querySelector('#tasks');

// Declare + grab the form
const taskForm = document.querySelector('#create-task-form');

// // Create new delete button element 
// const deleteButton = document.createElement('button');

// // Name the button text "X"
// deleteButton.innerText = 'X';



// Add an event listener for the submit button
taskForm.addEventListener('submit', addTaskToList);



// When the form has been submitted, take the input (newTask) and create
// a list of tasks within the ul (taskList) by appending each new task
function addTaskToList (event) {
  event.preventDefault();
  // Declare and create a list of tasks within the ul
    const taskListElement = document.createElement('li');
  // Declare the newTask by grabbing the content of the task input field
    const newTask = event.target['new-task-description'].value;
  // The text of my list item (taskListElement) should be the content from newTask
    taskListElement.innerText = newTask;
  // Append the list of tasks to the ul (taskList)
    taskList.append(taskListElement);

  // Create new delete button element 
    const deleteButton = document.createElement('button');
  // Name the button text "X"
    deleteButton.innerText = 'X';
  // Append the button onto the list item (taskListElement)
    taskListElement.append(deleteButton);
  // Add an event listener for when the delete button is clicked
    deleteButton.addEventListener('click', deleteTaskFromList);
}


// Remove the li (taskListElement) when button is clicked
function deleteTaskFromList (event) {
  event.target.parentElement.remove();
}