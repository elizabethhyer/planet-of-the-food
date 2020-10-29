Rails.application.routes.draw do
  resources :recipes, only: [:create]
  resources :oods, only: [:index, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
