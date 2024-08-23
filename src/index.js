import "./styles.css";
import { addTask, deletetask, toggletask } from "./task";
import { renderTask } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
renderTask();

document.getElementById("task-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const taskInput = document.getElementById("task-input").value;
    if(taskInput !=="") {
        addTask(taskInput);
        renderTask();
       //limpiar el cuadro de texto
        document.getElementById("task-input").value =""; 
    }
  });

  document.getElementById("task-list").addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")) {
        const taskId = e.target.parentElement.getAttribute("data-id");
        deletetask(taskId);
        renderTask();
    }
    
    if(e.target.classList.contains("toggle")) {
        const taskId = e.target.parentElement.getAttribute("data-id");
        toggletask(taskId);
        renderTask();
    }
  });
});
