#  https://medium.com/@jalenjackson/build-your-own-real-time-search-with-react-ruby-on-rails-760f141a2d1d
############
class MainController < ApplicationController

  before_action :force_json, only: :search

  def index; end

  def search
    @items = Guy.ransack(name_cont: params[:q]).result(distinct: true).limit(11) #?
  end

  private

  def force_json
    request.format = :json
  end
end
