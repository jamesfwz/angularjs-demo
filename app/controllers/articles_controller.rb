class ArticlesController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json { render :json => Article.all }
    end
  end
end