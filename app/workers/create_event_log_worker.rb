class CreateEventLogWorker
  include Sidekiq::Worker

  def perform(event_name)
    EventLog.create(name: event_name)
  end
end
