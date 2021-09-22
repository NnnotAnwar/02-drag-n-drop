// elements
const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
const textContent = item.textContent

// functions
const dragstart = event => {
    event.target.classList.add('hold')

    event.target.textContent = 'Еду в?'
    setTimeout(() => event.target.classList.add('hide'))
}

const dragend = event => { event.target.classList.remove('hold', 'hide'); event.target.textContent = textContent }

const dragover = event => { event.preventDefault() }
const dragenter = event => { event.target.classList.add('hovered') }
const dragleave = event => { event.target.classList.remove('hovered') }
const dragdrop = event => {
    event.target.classList.remove('hovered');
    event.target.append(item);
}



placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
})

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

