let addBtn = document.getElementById('addBtn')
let newTask = document.getElementById('newTask')
let taskList = document.getElementById('taskList')

addBtn.onclick = function () {
    const newItem = document.createElement('li')
    newItem.textContent = newTask.value
    taskList.appendChild(newItem)
}

function populatelist() {
    let start = Date.now()

    for (let i = 0; i < 1000; i++) {

        const newItem = document.createElement('li')
        newItem.textContent = i
        taskList.appendChild(newItem)
    }
    console.log('time taken =', (Date.now() - start))
}
