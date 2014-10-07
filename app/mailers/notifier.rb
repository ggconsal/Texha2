class Notifier < ActionMailer::Base
  # default from: "gconsal@texhaarg.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.notifier.mensaje.subject
  #
  #   (fullname, email, subject, message)
  #
  #  mail(to: email,
  #       from: "gconsal@texhaarg.com",
  #       body: message,
  #       subject: subject)

  def email_message(vSubject, vMessage, vEmail, vNombre)

    @greeting = "Hola"

    vMsgfinal = "From: " + vNombre + " / Email: " + vEmail + " / Mensaje: " + vMessage

    mail(to: "info@texhaarg.com",
         from: "gconsal@texhaarg.com",
         body: vMsgfinal,
         subject: vSubject)
  end
end
