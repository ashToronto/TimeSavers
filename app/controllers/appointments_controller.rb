class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order('appointment_time ASC')
    @appointment = Appointment.new
  end
end
