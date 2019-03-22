class Api::V1::EventLogsController < ::ApplicationController
  def index
    render json: EventLog.all
  end

  def create
    binding.pry
    CreateEventLogWorker.perform_async(params[:event_name])
    render json: EventLog.all
  end
end
# curl --request POST --url http://localhost:3001/api/v1/event_logs --header 'content-type: application/json' --data '{"event_name": "test","timestamp":"2017-10-01 06:00:01"}'
