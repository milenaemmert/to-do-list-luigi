
/*>>>> Create a new task*/
const newTask = document.querySelector('[data-form-button]')


const createTask = (event) => {
    event.preventDefault()

    const list = document.querySelector('[data-list')
    const input = document.querySelector('[data-form-input]')
    const inputValue = input.value

    const task = document.createElement('li')
    task.classList.add('task')
    task.setAttribute('data-item', '')

    const content = `<p class="li__p--task" data-content>${inputValue}</p>`

    task.innerHTML = content

    task.appendChild(CheckButton())
    list.appendChild(task)
    input.value = ""
}

newTask.addEventListener('click', createTask)

/*>>>> Finish task*/
const CheckButton = () => {
    const checkButton = document.createElement('button')
    checkButton.classList.add('check-button')
    checkButton.innerText = 'check'
    checkButton.addEventListener('click', FinishTask)

    return checkButton
}

const FinishTask = () => {
    const textTask = document.querySelector('[data-content]')
    textTask.classList.toggle('task-done') 

    const listItem = document.querySelector('[data-item]')
    listItem.classList.toggle('opacity')
}

//drag and drop
