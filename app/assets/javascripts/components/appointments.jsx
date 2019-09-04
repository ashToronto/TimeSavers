class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentData: this.props.data,
      input_appointment_time: ' ',
      input_title: ' ',
    }
  }

  handleUserInput(obj) {
    this.setState(obj)
  }

  handleFormSubmit(){
    const appointment = {
      title: this.state.input_title,
      appointment_time: this.state.input_appointment_time
    }
    $.post('/appointments',{appointment: appointment})
     .done(function(data){
       console.log(data)
       this.addNewAppointment(data)
     }.bind(this))
  }

  addNewAppointment(appointment){
    var appointments = this.state.appointmentData.concat(appointment);
    appointments = appointments.sort(function(a,b){
      return new Date(a.appointment_time) - new Date(b.appointment_time)
    })
    this.setState({ appointmentData: appointments });
  }

  render() {
    return (<div>
      <AppointmentForm
        input_title={this.state.input_title}
        input_appointment_time={this.state.input_appointment_time}
        onUserInput={this.handleUserInput.bind(this)}
        onFormSubmit={this.handleFormSubmit.bind(this)}
        />
      <AppointmentsList appointmentData={this.state.appointmentData} />
      </div>)
   }
}
