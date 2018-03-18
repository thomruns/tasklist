# Task List App

Basic Tasklist App using Materialize as CSS but only vanilla Javascript (jQuery required only as a Materialize dependency).

This app provides the following functionality:
* Allows user to add tasks to a list and display the list of tasks, persisting in local storage from session to session
* Allows user to delete individual tasks from the list after confirmation
* Allows user to delete entire list of tasks
* Allows user to filter tasks 

## The build sequence for this app follows:

* Define UI HTML

  As application utilizes Materialize for styling, class names are based upon its API

* Define all UI variables, create event listener functionality

  A new event listener is added as each module of functionality is added.

1. Functionality for adding tasks

  Basic functionality for adding tasks to a task list.

2. Functionality for deleting tasks

  Basic functionality for deleting individual tasks from the task list by clicking an icon.

* Modifications date

  For reference only; date of modifications; may be deleted upon app completion

3. Task deletion functionality

  Functionality for clearing all tasks from list after confirmation

4. Task filter functionality

  Functionality for filtering the task list

5. Local storage functionality

  Persist tasks in local storage, delete and clear tasks from local storage