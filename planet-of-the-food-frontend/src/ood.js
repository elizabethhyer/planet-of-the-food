class Ood {

    static allOods = []

    constructor(ood) {
        this.name = ood.attributes.name
        Ood.allOods.push(this)
    }

    renderOod(ood) {
        let div = document.getElementById('oodContainer')
        let pgh = document.createElement('p')
        pgh.innerText = ood.attributes.name
        div.appendChild(pgh)
    }
    
    static renderOods() {
        for (let ood of this.allOods) {
            renderOod(ood)
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
    
}