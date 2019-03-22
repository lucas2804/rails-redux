class EventLogsController < ApplicationController
  def index
    render json: EventLog.all
  end

  def create

  end
end
