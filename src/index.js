document.addEventListener("DOMContentLoaded", () => {
  let counter = 0
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    const task = document.getElementById("new-task-description");
    const tasklist = document.getElementById("list")
    counter += 1
    tasklist.innerHTML += `<li> ${task.value} <button id="delete${counter}">x</button></li>`
      tasklist.addEventListener("click", function(event) {
    event.toElement.parentElement.outerHTML = ""
    counter -= 1
    
  })
    
    event.preventDefault();

}, false);

});
