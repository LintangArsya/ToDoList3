document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskform');
    const taskList = document.getElementById('tasklist');
    const completedList = document.getElementById('completedlist');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask();
    });

    function addTask() {
        const taskInput = document.getElementById('tugas');
        const dateInput = document.getElementById('tanggal');
        const taskText = taskInput.value;
        const taskDate = dateInput.value;

        if (taskText === '' || taskDate === '') return;

        const listItem = document.createElement('li');
        listItem.classList.add('task-item');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = `${taskText} (Due: ${taskDate}) `;
        listItem.appendChild(taskSpan);

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-button');
        completeButton.addEventListener('click', function() {
            completeTask(listItem);
        });
        buttonContainer.appendChild(completeButton);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', function() {
            editTask(listItem, taskSpan);
        });
        buttonContainer.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            deleteTask(listItem);
        });
        buttonContainer.appendChild(deleteButton);

        listItem.appendChild(buttonContainer);
        taskList.appendChild(listItem);

        taskInput.value = '';
        dateInput.value = '';
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }

    function editTask(taskItem, taskSpan) {
        const taskText = prompt('Edit your task', taskSpan.textContent.split(' (Tanggal: ')[0]);
        const taskDate = prompt('Edit your Tanggal date', taskSpan.textContent.split(' (Tanggal: ')[1].slice(0, -1));
        
        if (taskText !== null && taskDate !== null) {
            taskSpan.textContent = `${taskText} (Tanggal: ${taskDate}) `;
        }
    }

    function completeTask(taskItem) {
        const taskSpan = taskItem.querySelector('span');
        taskItem.removeChild(taskItem.querySelector('.button-container'));
        completedList.appendChild(taskItem);
        taskSpan.style.textDecoration = 'line-through';
    }
});
