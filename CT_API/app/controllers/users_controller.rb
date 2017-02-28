class UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: current_user.as_json({
      include:
      [:articles ,:fact_checks] 
      })
  end

end