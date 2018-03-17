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
  // Remove task event listener (added to tasklist)
  taskList.addEventListener('click', removeTask);
}

// addTask FUNCTION
function addTask(e) {
  // if the button is clicked but the input field is blank
  if(taskInput.value === '') {
    alert('Please enter a task!');
  }
  // Create li element
  const li = document.createElement('li');

  // Add class to new li element
  li.className = 'collection-item';

  // Create text node and append to new li element
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element
  const link = document.createElement('a');

  // Add class to new link element
  link.className = 'delete-item secondary-content'; // secondary-content for Materialize

  // Add icon html
  link.innerHTML = '<i class ="fa fa-remove"></i>';

  // Append link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

  // Prevent Default event behavior
  e.preventDefault();
}  // End addTask function

// removeTask FUNCTION
//  e.target will be the icon
//   its parent element is the link, which contains the delete-item class
//   so to remove the li item itself, its parent (the li) must be retrieved
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
      // this gets the parent li element itself
      e.target.parentElement.parentElement.remove();
    } 
  }
} // end removeTask function

// Reference for modifications only -- may be deleted
const modifiedDate = document.lastModified;
const footer = document.querySelector('footer');
footer.appendChild(document.createTextNode(modifiedDate));
