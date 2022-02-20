/*>>>> Create a new task*/
const newTask = document.querySelector('[data-form-button]')
const list = document.querySelector('[data-list]')
const input = document.querySelector('[data-form-input]')

const createTask = () => {
    const inputValue = input.value

    const task = document.createElement('li')
    task.classList.add('task')

    const content = `<p class="li__p--task"
    data-toggle="tooltip" data-placement="bottom" title="Arraste para a direita para remover tarefa">${inputValue}</p>`

    task.innerHTML = content

    task.appendChild(CheckButton())
    list.appendChild(task)
    input.value = ""
}

newTask.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value !== '') {
        createTask(event)
    }
})

/*>>>> Finish task*/
const CheckButton = () => {
    const checkButton = document.createElement('button')
    checkButton.classList.add('check-button')
    checkButton.innerText = 'check'
    checkButton.addEventListener('click', FinishTask)

    return checkButton
}

const FinishTask = (event) => {
    const checkButton = event.target
    const task = checkButton.parentElement

    if (task.classList.contains('task-done--opacity')) {
        task.classList.remove('task-done--opacity')
        list.insertBefore(task, list.firstChild)
    } else {
        task.classList.add('task-done--opacity')
        list.insertBefore(task, list.lastChild.nextSibling)
    }
}


//drag and drop