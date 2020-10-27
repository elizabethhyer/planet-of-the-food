class Ood {

    renderOod(ood) {
        let div = document.getElementById('oodContainer')
        let pgh = document.createElement('p')
        pgh.innerText = ood.attributes.name
        div.appendChild(pgh)
    }
    
    static renderOods(oods) {
        for (ood of oods) {
            renderOod(ood)
        }    
    }
    
    static fetchOods() {
        fetch("http://localhost:3000/oods")
        .then(r => r.json())
        .then(oods => console.log(oods.data))
    }
    
}