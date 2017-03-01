class FactChecksController < ApplicationController

  before_action :authenticate_user!, :except => [:show, :index]
  
  def index
    factChecks = FactCheck.all  
    render :json => factChecks.to_json()
  end

  def create
    factCheck = factCheck_params
    factCheck[:user_id] = current_user.id
    FactCheck.create(factCheck)
    render json: factCheck.as_json, status: :created
  end

  def show
    factCheck = FactCheck.find(params[:id])
    render :json => factCheck.as_json({
      include:
      [:user]
      })
  end

  def update
    factCheck = FactCheck.find(params[:id])

    if factCheck.update_attributes(factCheck_params)
      render({json: factCheck})
    else
      render({json: :update_failed})
    end

  end

  def destroy
    factCheck = FactCheck.find(params[:id])

    if factCheck.destroy!
      render({json: {status: :success}})
    else
      render({json: {status: :delete_failed}})
    end

  end

  private
  def factCheck_params
    params.require(:fact_check).permit([:category, :claim, :evidence, :sources, :article_id])
  end

end