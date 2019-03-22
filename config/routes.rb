Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :event_logs, only: [:index, :create]
    end
  end
end
