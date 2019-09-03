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
    console.log(obj)
  }

  render() {
    return (<div>
      <AppointmentForm
        input_title={this.state.input_title}
        input_appointment_time={this.state.input_appointment_time}
        onUserInput={this.handleUserInput.bind(this)}
        />
      <AppointmentsList appointmentData={this.state.appointmentData} />
      </div>)
   }
}
