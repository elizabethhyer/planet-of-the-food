class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :content
end
