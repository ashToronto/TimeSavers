class Appointments extends React.Component {
  render() {
    return (<div>
      <AppointmentForm />
      <AppointmentsList data={this.props.data} />
      </div>)
   }
}
