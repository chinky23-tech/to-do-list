




const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const tasksList = document.getElementById('tasksList');

addTaskBtn.addEventListener('click', function () {
    const task = taskInput.value.trim();

    if (task === "") return;  // ✅ Fix is here

    const li = document.createElement('li');
    const span = document.createElement('span');
    const removeTask = document.createElement('button');

    span.textContent = task;
    removeTask.textContent = 'Remove';

    li.appendChild(span);
    li.appendChild(removeTask);
    tasksList.appendChild(li);

    taskInput.value = "";

    removeTask.addEventListener('click', function () {
        tasksList.removeChild(li);
    });
});
