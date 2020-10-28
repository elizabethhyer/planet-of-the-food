class RecipesController < ApplicationController

    def create 
        recipe = recipe.create(recipe_params)
        render json: RecipeSerializer.new(recipe)
    end 

    private 

    def recipe_params
        params.require(:recipe).permit(:name, :content, :ood_id)
    end 

end
