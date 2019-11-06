Rails.application.routes.draw do
  get :search, controller: :main
  resources :guys
  get 'react_bootstrap/index'
  root 'home#index'
  get 'fcc/index'
  get 'fcc/components'
  get 'fcc/props'
  get 'fcc/states'
  get 'fcc/life_cycle'
  get 'fcc/inline_styles'
  get 'fcc/advanced'
  get 'demo/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
