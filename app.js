// Define UI variables
const form = document.querySelector('#task-form'); // Task entry form 
const taskList = document.querySelector('.collection'); // List of tasks to be modified
const clearBtn = document.querySelector('.clear-tasks'); // Clear task functionality hook
const filter = document.querySelector('#filter'); // Filter tasks functionality hook
const taskInput = document.querySelector('#task'); // Task input value field hook

// Load all event listeners
loadEventListeners();

// loadEventListeners all event listeners functionality and build sequence
function loadEventListeners() {
  // 5. DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // 1. Add task event listener to form
  form.addEventListener('submit', addTask);
  // 2. Remove task event listener (added to tasklist)
  taskList.addEventListener('click', removeTask);
  // 3. Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // 4. Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// 6b. getTasks from local storage FUNCTION (on load event)
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');

    // Add class to new li element
    li.className = 'collection-item';

    // Create text node and append to new li element
    li.appendChild(document.createTextNode(task));

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
  });
} // end getTasks function

//  1. addTask FUNCTION
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

  // Store in local storage function call
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';

  // Prevent Default event behavior
  e.preventDefault();
}  // End addTask function

// 6a. store task in local storage functionality
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 2. removeTask FUNCTION
//  e.target will be the icon
//   its parent element is the link, which contains the delete-item class
//   so to remove the li item itself, its parent (the li) must be retrieved
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
      // this gets the parent li element itself
      e.target.parentElement.parentElement.remove();

      // Remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    } 
  }
} // end removeTask function

// 6c. Remove tasks from local storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index) {
    if(taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 4. clearTasks function
function clearTasks() {
  // Easy but slower processing
  //taskList.innerHTML = '';

  // Faster processing
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // clear from local storage
  alert('Are you sure you want to delete all the tasks?');
  clearTasksFromLocalStorage();
} 

function clearTasksFromLocalStorage() {
  localStorage.clear();
} // end clearTasks functionality

// 5. filterTasks function
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
} // end filterTasks function



//  3. Reference for modifications only -- may be deleted
const modifiedDate = document.lastModified;
const footer = document.querySelector('footer');
footer.appendChild(document.createTextNode(modifiedDate));
