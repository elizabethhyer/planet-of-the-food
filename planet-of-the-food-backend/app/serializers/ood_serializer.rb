class OodSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  attribute :recipes do |ood|
    RecipeSerializer.new(ood.recipes).as_json["data"]
  end 
end
