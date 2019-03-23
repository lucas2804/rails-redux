class UserMailer < ApplicationMailer
  def example
    mail(to: 'luc@tinypulse.com', subject: 'Test Email for Letter Opener')
  end
end
