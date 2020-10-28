class Ood {

    static allOods = []

    constructor(ood) {
        this.name = ood.attributes.name
        this.id = ood.id
        this.recipes = ood.attributes.recipes.map(recipe => new Recipe(recipe))
        Ood.allOods.push(this)
    }

    renderOod() {
        let div = document.getElementById('oodContainer')
        let pgh = document.createElement('p')
        pgh.id = this.id 
        pgh.innerText = this.name
        pgh.addEventListener('click', this.showOod.bind(this))
        div.append(pgh)
    }

    showOod() {
        let container = document.getElementById('container')
        let h3 = document.createElement('h3')
        let ul = document.createElement('ul')
        let form = document.createElement('form')
        let label = document.createElement('label')
        let input = document.createElement('input')
        let btn = document.createElement('input')
        btn.type = "Submit"
        btn.innerText = "Submit"
        input.id = "newRecipe" 
        label.innerText = "New Recipe: "
        form.id = "recipeForm"
        form.append(label)
        form.append(input)
        form.append(btn)
        container.innerHTML = ""
        h3.innerText = this.name
        container.append(h3)
        container.append(ul)
        for (let recipe of this.recipes) {
            ul.innerHTML += recipe.recipeNameHTML()
            ul.innerHTML += recipe.recipeContentHTML()
        }
        container.append(form)
        form.addEventListener('submit', this.submitRecipe.bind(this))
    }

    submitRecipe(e) {
        e.preventDefault()
        let content = document.getElementById("content").value
        let ood_id = this.id 
        let recipe = {recipe: {content, ood_id}}
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(recipe)
        }
        fetch("http://localhost:3000/recipes", options)
        .then(response => response.json())
        .then(data => console.log(data))
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