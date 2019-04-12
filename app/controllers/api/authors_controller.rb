class Api::AuthorsController < ApplicationController
  # GET /authors
  # GET /authors.json
  def index
    @authors = Author.all
    render json: @authors
  end
end
