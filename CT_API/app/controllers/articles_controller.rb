class ArticlesController < ApplicationController
  before_action :authenticate_user!, :except => [:show, :index]
  
  def index
    articles = Article.all  
    render :json => articles.to_json()
  end

  def create
    article = Article.create( article_params )
    render json: article, status: :created
  end

  def show
    article = Article.find(params[:id])
    render :json => article.as_json({
      include:
      {user: { only: :email}}
      })
  end

  private
  def article_params
    params.require(:article).permit([:url, :title, :embeded])
  end

end
