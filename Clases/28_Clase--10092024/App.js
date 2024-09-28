// --- Botones ---
// TODO: 
// 1. "Ir a buscar" la tarea al formulario de tareas.
// 2. Cuando tenga la tarea, debo poder: 
// 2.A. Crearla, asignarle una fecha, asignarle una prioridad y sumarla a la pila de tareas.
// 2.B. Limpiar el formulario.


// --- Tareas ---
// TODO: 
// 1. Crear una clase que contenta el modelo inicial de la tareas.
// 1.A. Debe tener : Fecha, Contenido, Prioridad.
// 2. Si a la tarea le falta uno de los dos items (la tarea y/o la fecha) debe mostrar un error.
// 3. Ordene las tareas por fecha descendente o de forma ascendente.

// --- Editar ---
// TODO:
// 1. Editar la tarea.
// 2. Completar la tarea.
// 3. Eliminar la tarea.
// 4. Seleccionar la tarea.

// Esperar a que el DOM esté completamente cargado



class Task {
    constructor(id, text, date, status) {
        this.id = id; // id : yhgfdu76ru7e , 
        this.text = text; // text : "Comprar leche"     
        this.date = date; // date : "2024-09-10"
        this.completed = false;
    }

    toggleCompleted() {
        this.status = !this.status;
    }

    render() { }

    update(text, date) {
        this.text = text;
        this.date = date;
    }

    delete(id, status) {
        this.id = id;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];

        this.container = document.getElementById('task-list');
        this.taskImput = document.getElementById('js-Task');
        this.dateImput = document.getElementById('js-Date');
        this.addTask = document.getElementById('js-AddTask');
        this.editTask = document.getElementById('js-EditTask');
        this.deleteTask = document.getElementById('js-DeleteTask');
    }

    // Creacion del ID de la tarea
    createIdTask() {
        return Math.random().toString(36).substring(2, 15);
    }

    // Asignacion del contenido de la tarea
    taskContent() {

        if (this.taskImput.value == '' || this.dateImput.value == '') {
            alert('La informacion esta incompleta. Por favor, ingresa la tarea o la fecha');
            return
        }

        const task = new Task(this.createIdTask(), this.taskImput.value, this.dateImput.value);

        this.tasks.push(task);
        this.render();
        this.taskImput.value = '';
        this.dateImput.value = '';

    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.render();

    }

    editTask(id) {
        const task = this.tasks.find(task => task.id === id);
        this.taskImput.value = task.text;
        this.dateImput.value = task.date;
        this.render();

        if (task) {
            let editText = prompt('Ingresa la tarea modificada');
            let editDate = prompt('Ingresa la fecha modificada');

            if (editText && editDate) {
                task.update(editText, editDate);
                this.render();
            } else if (taskValue == '' || taskDate == '') {
                this.addTask = false;
                this.taskImput.value = task.text;
                this.dateImput.value = task.date;
            }
        } else {
            alert('No se encontro la tarea')
        }
    }

    render() {
        // this.container.innerHTML = '';
        this.tasks.forEach(task => {
            const taskElement = document.createElement('li');
            taskElement.textContent = `${task.text} - Fecha: ${task.date}`;
            taskElement.classList.add('TaskList__item');
            this.container.appendChild(taskElement);

            const inputElement = document.createElement('input');
            inputElement.type = 'radio';
            inputElement.setAttribute('name', 'taskItem');
            taskElement.appendChild(inputElement);
        });

        this.addTask.addEventListener('click', () => {
            this.taskContent();
        });

        this.editTask.addEventListener('click', () => {
            this.editTask();
        });

        this.deleteTask.addEventListener('click', () => {
            this.deleteTask();
        });
        
        
        //TaskManager.editTask() ;
        //TaskManager.deleteTask();
    }

}


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado');
    const taskManager = new TaskManager();
    taskManager.render();
});









/*
// Función para agregar una tarea
function addTask() {
    //let list = {};
    const Task = document.getElementById('js-Task'); // <input type="text" id="js-Task" name="task" placeholder="Escribe tu tarea aquí">
    const Date = document.getElementById('js-Date');

    let taskValue = Task.value;
    let taskDate = Date.value;


    if (taskValue == '' || taskDate == '') {
        alert('La informacion esta incompleta. Por favor, ingresa la tarea o la fecha');

    } else {
        let node = document.createElement('li');
        let textNode = document.createTextNode(`${taskValue} - Fecha : ${taskDate}`);
        node.appendChild(textNode);
        node.classList.add('TaskList__item');
        node.setAttribute('tabindex', '1');

        TaskList.appendChild(node);

        let nodeInput = document.createElement('input');
        nodeInput.type = 'radio';
        nodeInput.setAttribute('name', 'taskItem');
        node.appendChild(nodeInput);


        alert('Tarea agregada con exito');
        console.log('Se agrego una tarea')
    }
}

// Función para seleccionar una tarea
/*
function selectTask() {
    
    let taskItems = document.getElementsByName('taskItem');

    taskItems.forEach(item => {
        if (item.checked) {
            console.log(item);
        }
    })
}

Función para seleccionar una tarea
function pedirFecha() {
    let fecha;
    const regexFecha = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD
    do {
        fecha = prompt("Ingresa una fecha en el formato YYYY-MM-DD:");
    } while (!regexFecha.test(fecha));
    return fecha
}

function selectTask() {
    let taskItems = document.getElementsByName('taskItem');
    taskItems.forEach((item) => {
        if (item.checked == true) {
            let editText = prompt('Ingresa la tarea modificada')
            let editDate = pedirFecha();
            if (editText && editDate) {
                item.parentElement.textContent = `${editText} - Fecha: ${editDate}`
            }
        }
    })
}

TaskList.addEventListener('click', () => {
    selectTask()
})


// Función para editar una tarea
function editTask() {

    let taskItems = document.getElementsByName('taskItem');
    let node = '';

    taskItems.forEach(item => {
        if (item.checked) {
            node = item.parentElement;
        }
    })

    const Task = document.getElementById('js-Task'); // <input type="text" id="js-Task" name="task" placeholder="Escribe tu tarea aquí">
    const Date = document.getElementById('js-Date');

    let taskValue = Task.value;
    let taskDate = Date.value;

    node.innerHTML = `${taskValue} - Fecha : ${taskDate}`;
    node.classList.add('TaskList__item');
    node.setAttribute('tabindex', '1');

    let nodeInput = document.createElement('input');
    nodeInput.type = 'radio';
    nodeInput.setAttribute('name', 'taskItem');
    node.appendChild(nodeInput);
    console.log('Se edito una tarea')

}

// Función para eliminar una tarea
function deleteTask() {
    let tareaAEliminar = document.getElementById('');
}
*/