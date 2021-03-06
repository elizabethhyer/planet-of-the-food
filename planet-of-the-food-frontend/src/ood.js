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
    let nameLabel = document.createElement('label')
    let contentLabel = document.createElement('label')
    let nameInput = document.createElement('input')
    let contentInput = document.createElement('input')
    let btn = document.createElement('input')
    btn.type = "Submit"
    btn.innerText = "Submit"
    nameInput.id = "newRecipeName"
    contentInput.id = "newRecipeContent"
    nameLabel.innerText = "Name:"
    contentLabel.innerText = "Ingredients:"
    form.id = "recipeForm"
    ul.id = "oodUL"
    form.append(nameLabel)
    form.append(nameInput)
    form.append(contentLabel)
    form.append(contentInput)
    form.append(btn)
    container.innerHTML = ""
    h3.innerText = this.name
    container.append(h3)
    container.append(ul)
    for (let recipe of this.recipes) {
      recipe.listOodRecipes()
    }
    container.append(form)
    form.addEventListener('submit', this.submitRecipe.bind(this))
  }

  async submitRecipe() {
    event.preventDefault()
    let name = document.getElementById("newRecipeName").value
    let content = document.getElementById("newRecipeContent").value
    let ood_id = this.id
    let recipe = { recipe: { name, content, ood_id } }
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(recipe)
    }

    document.getElementById("newRecipeName").value = ""
    document.getElementById("newRecipeContent").value = ""

    try {
      let response = await fetch("http://localhost:3000/recipes", options)
      let recipe = await response.json()
      if (recipe.data) {
        let newRecipe = new Recipe(recipe.data)
        let ood = Ood.allOods.find(ood => parseInt(ood.id) === newRecipe.oodId)
        let ul = document.querySelector('ul')
        ood.recipes.push(newRecipe)
        newRecipe.listOodRecipes()
      } else {
        throw new Error(recipe.message)
      }
    } catch (err) {
      alert(err)
    }
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
        if (oods.data) {
          for (let ood of oods.data) {
            new Ood(ood)
          }
          this.renderOods()
        } else {
          throw new Error(oods.data)
        }

      }).catch(err => alert(err))
  }

  static createOod() {
    event.preventDefault()
    const name = document.getElementById('oodName').value
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ ood: { name: name } })
    }

    document.getElementById('oodName').value = ""

    fetch("http://localhost:3000/oods", options)
      .then(r => r.json())
      .then(oodObj => {
        if (oodObj.data) {
          let newOod = new Ood(oodObj.data)
          newOod.renderOod()
        } else {
          throw new Error(oodObj.message)
        }

      }).catch((err) => alert(err))
  }

}