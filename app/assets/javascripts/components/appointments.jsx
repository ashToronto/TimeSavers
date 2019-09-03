// class Appointments extends React.Component {
//   render() {
//     return (<h1>Welcome to TimeSavers</h1>)
//    }
// }

class Appointments extends React.Component {
  render() {
    return (<div>
        {this.props.data.map(function(display){
          return(
            <div>
              <h3>{display.title}</h3>
              <p>{display.appointment_time}</p>
            </div>
          )})}
      </div>)
   }
}
