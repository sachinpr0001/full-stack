let addBtn = document.getElementById('addBtn')
let newTask = document.getElementById('newTask')
let taskList = document.getElementById('taskList')

addBtn.onclick = function () {
    taskList.innerHTML += '<li>' + newTask.value + '</li>' 
}
