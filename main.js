// DOM VARIABLE
const btnAddTask = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("new-task");

  // Hanlde add new task
btnAddTask.addEventListener("click", () => {
  // get the task name from the user input
  const taskName = taskInput.value;
  // check if the input is empty
  if (taskName == "") {
    alert("please enter the task name ...");
    return;
  }
  // add the list
  const newItem = taskItem(taskName);
  taskList.append(newItem);
  // clear the input value
  taskInput.value = "";
});

// item Component
const taskItem = (taskName) => {
  const li = document.createElement("li");
  li.innerText = taskName;
  return li;
};
