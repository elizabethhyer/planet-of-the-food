class RecipesController < ApplicationController

    def create 
        recipe = recipe.new(recipe_params)
        if recipe.save
            render json: RecipeSerializer.new(recipe)
        else 
            render json: {message: recipe.errors.full_messages}
        end 
    end 

    private 

    def recipe_params
        params.require(:recipe).permit(:name, :content, :ood_id)
    end 

end
