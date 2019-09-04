class Appointment extends React.Component {
  render() {
    return (
      <div>
          <h3>{this.props.display.title}</h3>
          <p>{moment(this.props.display.appointment_time).format('MMMM DD YYYY, h:mm:ss a')}</p>
      </div>)
   }
}
