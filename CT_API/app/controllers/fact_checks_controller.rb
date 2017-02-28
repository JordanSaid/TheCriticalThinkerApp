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

  private
  def factCheck_params
    params.require(:factCheck).permit([:category, :claim, :evidence, :sources])
  end

end