class FactChecksController < ApplicationController

  before_action :authenticate_user!, :except => [:show, :index]
  
  def index
    factChecks = FactCheck.all  
    render :json => factChecks.to_json()
  end

  def create
    factCheck = FactCheck.create( factCheck_params )
    render json: factCheck, status: :created
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
    params.require(:factCheck).permit([:category, :claim, :evidence, :sources])
  end

end