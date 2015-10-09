class ArticlesController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json { 
        @articles = Article.all.to_json(only: [:id,:title,:created_at], methods: [:picture_url])
        render :json => @articles
      }
    end
  end

  def show
    @article = Article.find(params[:id]).to_json(only: [:id,:title, :content, :created_at], methods: [:picture_url])

    respond_to do |format|
      format.json { 
        @article = Article.find(params[:id]).to_json(only: [:id,:title, :content, :created_at], methods: [:picture_url])
        render :json => @article
      }
    end
  end

  def create
    @article = Article.create(create_params)

    respond_to do |format|
      format.json { 
        render :json => @article
      }
    end
  end

  private
  
  def create_params
    params.require(:article).permit(
        :title,
        :content,
        :picture
      )
  end
end