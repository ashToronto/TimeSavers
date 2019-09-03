class AppointmentForm extends React.Component {
  render() {
    return (<div>
      <h2>Schedule an appointment</h2>
        <form>
          <input name='title' placeholder='meeting' />
          <input name='appointment_time' placeholder='date and time'/>
          <input type='submit' value='Confirm' />
        </form>
      </div>)
   }
}
