const button = document.getElementById('button');
const form = document.getElementById('create-task-form');
const newListItem = document.getElementById('tasks');

function addTaskToList(eventObj) {
  eventObj.preventDefault();
  const listItem = document.createElement('li');
  const newText = eventObj.target['new-task-description'].value
  listItem.textContent = newText
  newListItem.append(listItem)
}

form.addEventListener('submit', addTaskToList);

document.addEventListener("DOMContentLoaded", () => {
  // your code here
});