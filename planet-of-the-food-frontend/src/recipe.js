class Recipe {

    constructor(recipe) {
        this.content = recipe.attributes.content
        this.id = recipe.id
        this.oodId = recipe.attributes.ood_id
    }

    recipeHTML() {
        return `<h4 id="${this.id}">${this.name}</h4>`
        return `<li id="${this.id}">${this.content}</li>`
    }

}