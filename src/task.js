let tasks = JSON.parse(localStorage.getItem("tasks")) || []; /almacenamiento local en nuestro navegador/

//funcion para llevar las tareas//

export const getTask = () => tasks;

//funcion para agegar tarea//
export const addTask = (task) => {
    const newtask = {
        id:Date.now(),
        text: task,
        completed:false,
    };
    tasks.push(newtask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//funcion para eliminar una tarea
export const deletetask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//funcion para actualizar tarea
 export const toggletask = (id) => {
    tasks = tasks.map((task) => {
        if(task.id === parseInt(id)) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    };
