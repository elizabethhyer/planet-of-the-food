class Recipe {

    constructor(recipe) {
        this.name = recipe.attributes.name
        this.content = recipe.attributes.content
        this.id = recipe.id
        this.oodId = recipe.attributes.ood_id
    }

    recipeNameHTML() {
        return `<h4 id="${this.id}">${this.name}</h4>`
    }

    recipeContentHTML() {
        return `<li id="${this.id}">${this.content}</li>`
    }


    listOodRecipes() {
        let ul = document.getElementById('oodUL')
        ul.innerHTML += this.recipeNameHTML()
        ul.innerHTML += this.recipeContentHTML()
    }

}