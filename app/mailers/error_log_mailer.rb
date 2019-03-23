class ErrorLogMailer < ApplicationMailer
  def fatal_error(message)
    @message = message
    mail(to: 'luc@tinypulse.com', subject: 'Skylab was experienced with FATAL ERROR')
  end
end
