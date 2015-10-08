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
    respond_to do |format|
      format.json { 
        render :json => Article.find(params[:id])
      }
    end
  end
end