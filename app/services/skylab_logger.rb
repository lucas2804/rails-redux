class SkylabLogger < Logger
  LOG_LEVELS = %i(debug info warn error fatal unknown).freeze

  def initialize
    @logger_file = {}
    @logger_stdout = {}

    LOG_LEVELS.each do |level|
      @logger_file[level] = Logger.new "log/#{Rails.env}_skylab.log"
      @logger_stdout[level] = ActiveSupport::Logger.new STDOUT
    end
  end

  # def debug end; def info end; ...
  LOG_LEVELS.each do |level|
    define_method(level) do |message = ""|
      @logger_file[level].send level, message
      @logger_stdout[level].send level, message

      ErrorLogMailer.fatal_error(message).deliver
    end
  end
end
