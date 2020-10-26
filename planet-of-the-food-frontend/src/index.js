const form = document.getElementById('oodForm')

form.addEventListener('submit', submitForm)

function submitForm() {
    event.preventDefault()
    const name = document.getElementById('oodName').value
    document.getElementById('oodName').value = ""
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ood: {name: name}})
    }

    fetch("https://localhost:3000/oods", options)
    .then(r => r.json())
    .then(oodObj => renderOod(oodObj))

}