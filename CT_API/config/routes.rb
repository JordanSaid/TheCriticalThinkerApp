Rails.application.routes.draw do
  
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'}
    
    scope path: "api" do
      resources :articles, :fact_checks, defaults: {format: :json}
    end

    resources :users

end
