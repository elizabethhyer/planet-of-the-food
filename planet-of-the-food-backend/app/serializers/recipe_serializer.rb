class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :content
  belongs_to :ood
end
