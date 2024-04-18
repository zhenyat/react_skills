class GuysController < ApplicationController
  def index
    guys = Guy.all.order(:date_of_birth)
    @data =Array.new
    guys.each do |guy|
      @data << {id: guy.id, name: guy.name, age: guy.age}
    end

  # Just for test
  # render json: {data: @data} 
  end
end
