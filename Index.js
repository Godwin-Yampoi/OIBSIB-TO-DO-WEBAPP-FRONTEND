let tasks = []

function addTask() {
    const taskInput = document.getElementById('taskInput')
    const taskText = taskInput.value.trim()

    if(taskText !== "") {
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false,
      timestamp: new Date().toLocaleString()

    }
    tasks.push(task)
    renderTasks()
    taskInput.Value = ""
    } else {
        alert('please enter task')
    }
}

function renderTasks() {
    const pendingTasksList = document.getElementById('pendingTasks')
    const completedTasksList = document.getElementById('completedTasks')
    pendingTasksList.innerHTML = ""
    completedTasksList.innerHTML = ""


tasks.forEach(task => {
    li = document.createElement('li')
    li.textContent = `${task.text} - Added: ${task.timestamp} `
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', () => deleteTask(task.id))
    li.appendChild(deleteButton)


if (task.completed) {
    const markInCompleteButton = document.createElement('button')
    markInCompleteButton.textContent = 'mark incomplete'
    markInCompleteButton.addEventListener('click', () => markTaskIncomplete(task.id))
    li.appendChild(markInCompleteButton)
    completedTasksList.appendChild(li)
} else {
    const markCompleteButton = document.createElement('button')
    markCompleteButton.textContent = 'mark Complete'
    markCompleteButton.addEventListener('click', () => markTaskcomplete(task.id))
    li.appendChild(markCompleteButton)
    pendingTasksList.appendChild(li)

    }

  })

}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId)
    renderTasks()
}

function markTaskcomplete (taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId)
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = true
        renderTasks()
    }
}

function markTaskIncomplete (taskId) {
    const taskIndex =tasks.findIndex(task => task.id === taskId)
    if(taskIndex !== -1) {
        tasks[taskIndex].completed = false
        renderTasks()
    }
}

renderTasks()