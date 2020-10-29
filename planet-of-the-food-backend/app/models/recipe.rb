class Recipe < ApplicationRecord
  belongs_to :ood
  validates :name, uniqueness: true
end
