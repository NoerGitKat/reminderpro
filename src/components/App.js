import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions'
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  addReminder() {
    console.log('oh wowie!')
  }

  render() {
    return (
      <div className="App">
        <h1>This is Reminder Pro!</h1>
        <div className="form-inline">
        	<div className="form-group">
        		<input onChange={event => this.setState({ text: event.target.value })} type="text" className="form-control" placeholder='I have to...'/>
        		<button onClick={() => this.addReminder()} className="btn btn-success">Add a Reminder</button>
        	</div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder}, dispatch);
}

export default App;
