class Ood {

    static allOods = []

    constructor(ood) {
        this.name = ood.attributes.name
        Ood.allOods.push(this)
    }

    renderOod() {
        let div = document.getElementById('oodContainer')
        let pgh = document.createElement('p')
        pgh.innerText = this.name
        div.appendChild(pgh)
    }
    
    static renderOods() {
        for (let ood of this.allOods) {
            ood.renderOod()
        }    
    }
    
    static fetchOods() {
        fetch("http://localhost:3000/oods")
        .then(r => r.json())
        .then(oods => {
            for (let ood of oods.data) {
                let newOod = new Ood(ood)
            } 
            this.renderOods()
        })
    }

    static createOod() {
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
    
        fetch("http://localhost:3000/oods", options)
        .then(r => r.json())
        .then(oodObj => {
            let newOod = new Ood(oodObj.data)
            newOod.renderOod()
        })
    }
    
}