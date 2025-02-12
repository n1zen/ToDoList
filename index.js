// const taskCounter = document.querySelector('#taskCounter');

// document.querySelectorAll('.task').forEach(
//     (element) => {
//         let taskCounter = document.querySelector('#taskCounter');
//         count = element.children.length;

//         taskCounter.innerHTML = `Amount of tasks left: ${count}`;

//         element.parentNode.insertBefore(
//             taskCounter,
//             element.nextElementSibling
//         );
//     }
// );


const taskList = document.querySelector('#taskList');
const tasks = Array.from(taskList.children);

const taskCount = tasks.length;

const taskCounter = document.querySelector('#taskCounter');

const deleteTaskBtn = document.querySelector('#deleteTaskBtn');
const addTaskBtn = document.querySelector('#addTaskBtn');

countTasks();
function countTasks() {
    taskCounter.textContent = `Amount of tasks left: ${taskCount}`;
}

function deleteTask() {
    
}

function addTask() {

}

function toggleTaskStatus() {

}
console.log(taskCount);