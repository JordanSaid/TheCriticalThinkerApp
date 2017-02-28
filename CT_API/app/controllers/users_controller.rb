class UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: current_user.as_json({
      include:
      [:articles ,:fact_checks] 
      })
  end

  def update
    if current_user.update_attributes(current_user_params)
      render({json: current_user})
    else
      render({json: :update_failed})
    end
  end

  def destroy
    if current_user.destroy!
      render({json: {status: :success}})
    else
      render({json: {status: :delete_failed}})
    end
  end

end