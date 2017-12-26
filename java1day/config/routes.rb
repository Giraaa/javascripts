Rails.application.routes.draw do
  # "/"
  root 'boards#index'
  #CRUD
  # C - new, create
  get '/boards/new' => 'boards#new' #new
  post '/boards' => 'boards#create' #create 같은url이라도
  #요청방식이 다르다면 가능함

  # R - index, show
  get '/boards' => 'boards#index' #index
  get '/boards/:id' => 'boards#show' #show :id가 new로 받아지는경우 충돌날 수 있음
  # U - edit, update
  get '/boards/:id/edit' => 'boards#edit' #edit
  put '/boards/:id' => 'boards#update' #update

  # D - destroy

  delete '/boards/:id' => 'board#destroy'
end
