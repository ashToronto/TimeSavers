class AppointmentsList extends React.Component {
  render() {
    return (<div>
        {this.props.appointmentData.map(function(display){
          return(
            <Appointment display={display} />
          )})}
      </div>)
   }
}
