class Api::EventLogsController < ActionController::Base
  skip_before_action :verify_authenticity_token

  # GET /event_logs
  # GET /event_logs.json
  def index
    @event_logs = EventLog.all
    render json: @event_logs
  end

  # POST /event_logs
  # POST /event_logs.json
  def create
    CreateEventLogWorker.perform_async(event_name)
    render json: { message: "Logging #{event_name} in sidekiq" }, status: :created
  end

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def event_name
    params.require(:event_name)
  end
end
