document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("addButton");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
  
    addButton.addEventListener("click", addTask);
  
    function addTask() {
        
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerText = taskText;
  
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", () => {
          taskList.removeChild(listItem);
        });
  
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
  
        taskInput.value = "";

          
      }
    }

  });
  