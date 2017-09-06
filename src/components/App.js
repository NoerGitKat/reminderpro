import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder } from '../actions';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      dueDate: ''
    }

    this.addReminder = this.addReminder.bind(this);
    this.deleteReminder = this.deleteReminder.bind(this);
    this.renderReminders = this.renderReminders.bind(this);
  }

  //Creates new reminder with value the text put in input
  addReminder() {
    console.log('this.state.dueDate', this.state.dueDate)
    if(this.state.text.length === 0) {
      alert('Please put in an action!!')
    } else {
      this.props.addReminder(this.state.text, this.state.dueDate);
    }
  }

  //deletes reminder with certain id
  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  //renders each reminder with unique key
  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
      {
        reminders.map(reminder => {
        return (
              <li key={reminder.id} className='list-group-item'>
                <div className="list-item">{reminder.text} <em>{moment(new Date (reminder.dueDate)).fromNow()}</em></div>
                <div onClick={() => this.deleteReminder(reminder.id)} className="list-item delete-button">&#x2715;</div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <h1>This is Reminder Pro!</h1>
        <div className="form-inline">
        	<div className="form-group">
        		<input onChange={event => this.setState({ text: event.target.value })} type="text" className="form-control" placeholder='I have to...' required/>
            <input onChange={event => this.setState({ dueDate: event.target.value })} type="datetime-local" className="form-control"/>
            <br />
            <button onClick={() => this.addReminder()} className="btn btn-success">Add a Reminder</button>
        	</div>
        </div>
        { this.renderReminders() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);
