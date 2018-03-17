// Define UI variables
const form = document.querySelector('#task-form'); // Task entry form 
const taskList = document.querySelector('.collection'); // List of tasks to be modified
const clearBtn = document.querySelector('.clear-tasks'); // Clear task functionality hook
const filter = document.querySelector('#filter'); // Filter tasks functionality hook
const taskInput = document.querySelector('#task'); // Task input value field hook

// Load all event listeners
loadEventListeners();

// loadEventListeners functionality
function loadEventListeners() {
  // Add task event listener to form
  form.addEventListener('submit', addTask);
}

function addTask(e) {
  if(taskInput.value === '') {
    alert('Please add a task in the input field!');
  }
  // Create li element
  const li = document.createElement('li');
  // Add class to new element
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class to link element
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class ="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}
