class FactChecksController < ApplicationController
  before_action :authenticate_user!
  
  def index
    factChecks = FactCheck.all  
    render :json => factChecks.to_json()
  end

  def create
    factCheck = FactCheck.create( factCheck_params )
    render json: factCheck, status: :created
  end

  private
  def factCheck_params
    params.require(:factCheck).permit([:type, :claim, :evidence, :sources])
  end

end