//THIS IS FLATIRON CODE FOR TESTING PURPOSES >>>>
// 
//document.addEventListener("DOMContentLoaded", () => {
//   // initialize taskList class
//   const taskList = new TaskList();
//   //grab all the necessary DOM elements

//   //form and relevant input fields
//   const newTaskForm = document.getElementById("create-task-form");
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTaskPriority = document.getElementById("new-task-priority");

//   //ul where new tasks will live on the DOM
//   const taskUl = document.getElementById("tasks");

//   const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
//   //attach event listeners

//   newTaskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     taskList.createNewTask(newTaskDescription.value);
//     // reset form
//     e.target.reset();
//     renderApp();
//   });

//   taskUl.addEventListener("click", (e) => {
//     if (e.target.nodeName === "BUTTON") {
//       taskList.deleteTask(e.target.dataset.description);
//       renderApp();
//     }
//   });
// });




document.addEventListener("DOMContentLoaded", () => {
  
  const newTaskForm = document.getElementById("create-task-form");
  
  let counter = 0
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    const task = document.getElementById("new-task-description");
    const tasklist = document.getElementById("list")
    counter += 1
    tasklist.innerHTML += `<li> ${task.value} <button id="delete${counter}">x</button></li>`
    // debugger
    tasklist.addEventListener("click", function(event) {
    event.toElement.parentElement.outerHTML = ""
    counter -= 1
    
  })
    
    event.preventDefault();

}, false);

});
