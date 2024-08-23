// importR LA FUNCION PARA TRAER LAS TAREAS DE LOCALSTORGE
import { getTask } from "./task";

//funcion para visualizar tareas 
export const renderTask = () => {
    const tasklist = document.getElementById("task-list");
    tasklist.innerHTML = "";
    const task = getTask();
    task.forEach((task) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);

        if(task.completed === true) {
            li.classList.add("completed");
        }

            li.innerHTML = `
            ${task.text}
            <button class="delete"> Borrar </button>
            <button class="toggle"> ${task.completed === true ? "Regresar" : "completed"};
            `;

            tasklist.appendChild(li);
    });
}