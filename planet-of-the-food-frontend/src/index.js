const header = document.getElementById('header')
const form = document.getElementById('oodForm')
const mainContainer = document.getElementById('container')

form.addEventListener('submit', Ood.createOod)
header.addEventListener('click', reset)

function reset() {
    mainContainer.innerHTML = ""
    mainContainer.innerHTML += `<form id="oodForm">
    <label for="">Name:</label>
    <input type="text" id="oodName">
    <input type="submit">
    </form>`
    addListeners()
}

function addListeners() {
    const form = document.getElementById('oodForm')
    const div = document.createElement('div')
    div.id = "oodContainer"
    mainContainer.append(div)
    form.addEventListener('submit', Ood.createOod)
    Ood.renderOods()
}

Ood.fetchOods()
