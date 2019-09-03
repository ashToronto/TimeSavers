class AppointmentsList extends React.Component {
  render() {
    return (<div>
        {this.props.data.map(function(display){
          return(
            <Appointment display={display} />
          )})}
      </div>)
   }
}
