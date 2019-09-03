class Appointment extends React.Component {
  render() {
    return (
      <div>
          <h3>{this.props.display.title}</h3>
          <p>{this.props.display.appointment_time}</p>
      </div>)
   }
}
