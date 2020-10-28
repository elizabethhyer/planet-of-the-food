class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :content, :ood_id
end
