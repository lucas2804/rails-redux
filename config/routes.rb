Rails.application.routes.draw do
  resources :courses
  namespace :api do
    resources :event_logs, only: [:index, :create]
    resources :courses, only: [:index, :create, :update]
    resources :authors, only: [:index]
  end

  get 'question1/answer', to: 'skylab#question1_answer'
  get 'question2/answer', to: 'skylab#question2_answer'
  get 'question3/answer', to: 'skylab#question3_answer'
  get 'question4/answer', to: 'skylab#question4_answer'
  get 'question5/answer', to: 'skylab#question5_answer'

  post 'bubble_sort', to: 'skylab#bubble_sort' # answer01
  post 'bubble_sort_reverse', to: 'skylab#bubble_sort_reverse' # answer01
  post 'find_common_elements', to: 'skylab#find_common_elements' # answer02
  post 'find_first_non_repeated_char', to: 'skylab#find_first_non_repeated_char' # answer03
  post 'sort_count_hash', to: 'skylab#sort_count_hash' # answer04
  post 'skylab_logger', to: 'skylab#skylab_logger' # answer04
end
