class Api::V1::EventLogsController < ActionController::Base
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
    @event_log = EventLog.new(event_log_params)

    if @event_log.save
      render json: @event_log, status: :created
    else
      render json: @event_log.errors, status: :unprocessable_entity
    end
  end


  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def event_log_params
    params.require(:event_log).permit(:name)
  end
end
