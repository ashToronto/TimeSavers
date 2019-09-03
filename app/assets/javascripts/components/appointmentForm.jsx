class AppointmentForm extends React.Component {


  handleChange(e) {
      var name = e.target.name;
      obj = {};
      obj[name] = e.target.value;
      this.props.onUserInput(obj);
    }

  render() {
    return (<div>
      <h2>Schedule an appointment</h2>
        <form>
          <input name='input_title' placeholder='meeting'
            value={this.props.input_title}
            onChange={this.handleChange.bind(this)}
            />
          <input name='input_appointment_time' placeholder='date and time'
            value={this.props.input_appointment_time}
            onChange={this.handleChange.bind(this)}
            />
          <input type='submit' value='Confirm' />
        </form>
      </div>)
   }
}
