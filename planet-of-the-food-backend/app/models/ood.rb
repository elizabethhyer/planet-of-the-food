class Ood < ApplicationRecord
    has_many :recipes,  dependent: :destroy
end
