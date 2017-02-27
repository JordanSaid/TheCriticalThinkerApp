class ArticlesController < ApplicationController
  before_action :authenticate_user!
  
  def index
    articles = Article.all  
    render :json => articles.to_json()
  end

  def create
    article = Article.create( article_params )
    render json: article, status: :created
  end

  private
  def article_params
    params.require(:article).permit([:url])
  end

end
