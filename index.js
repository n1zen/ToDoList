window.addEventListener('load', () => {
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    console.log(tasks);

    displayTasks();
});


const addTaskBtn = document.getElementById('addTaskBtn');
addTaskBtn.addEventListener('click', function() {
    let newTask = window.prompt(`What's your new task?`);
    if (newTask == '' || newTask == null) {
        alert('Task cannot be empty');
        return;
    }
    const task = {
        content: newTask,
        isCompleted: false,
        createdAt: new Date().getTime()
    };

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks);

    displayTasks();
});

function displayTasks() {

    const taskList = document.querySelector('#taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('taskItem');
        
        const content = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const taskContent = document.createElement('div');
        const actions = document.createElement('div');
        const editTaskBtn = document.createElement('button');
        const deleteTaskBtn = document.createElement('button');

        input.type = 'checkbox';
        input.checked = task.isCompleted;
        content.classList.add('content');

        taskContent.classList.add('taskContent');
        actions.classList.add('actions');
        editTaskBtn.innerHTML= `<i class="fa-solid fa-pen-to-square"></i>`;
        deleteTaskBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        editTaskBtn.id = 'editTaskBtn';
        deleteTaskBtn.id = 'deleteTaskBtn';

        taskContent.innerHTML = `<input type="text" value="${task.content}" readonly>`;

        content.appendChild(label);
        label.appendChild(input);
        content.appendChild(taskContent);
        actions.appendChild(editTaskBtn);
        actions.appendChild(deleteTaskBtn);
        taskItem.appendChild(content);
        taskItem.appendChild(actions);

        taskList.appendChild(taskItem);

        if(task.isCompleted) {
            taskItem.classList.add('completed');
        }

        input.addEventListener('change', (e) => {
            task.isCompleted = e.target.checked;
            localStorage.setItem('tasks', JSON.stringify(tasks));

            if(task.isCompleted) {
                taskItem.classList.add('completed');
            } else {
                taskItem.classList.remove('completed');
            }

            displayTasks();
        });

        editTaskBtn.addEventListener('click', (e) => {
            const input = taskContent.querySelector('input');
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', (e) => {
                input.setAttribute('readonly', '');
                task.content = input.value;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                displayTasks();
            });
        });

        deleteTaskBtn.addEventListener('click', (e) => {
            tasks = tasks.filter(t => t != task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            displayTasks();
            countTasks();
        });
    });

    countTasks();
}

function countTasks() {
    let count = tasks.length;
    const taskCounter = document.getElementById('taskCounter');
    taskCounter.innerHTML = `Amount of tasks: ${count}`;
}