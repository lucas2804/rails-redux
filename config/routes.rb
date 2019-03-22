Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :event_logs, only: [:index, :create]
    end
  end

  get 'question1/answer', to: 'skylab#question1_answer'
  post 'bubble_sort', to: 'skylab#bubble_sort'
  post 'bubble_sort_reverse', to: 'skylab#bubble_sort_reverse'
end
