class GuysController < ApplicationController
  def index
    @guys = Guy.all
#    render json: {guys: @guys} 
  end
end
