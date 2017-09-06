import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello there!</h1>
        <div className="form-inline">
        	<div className="form-group">
        		<input type="text" className="form-control" placeholder='I have to...'/>
        		<button className="btn btn-success">Add a Reminder</button>
        	</div>
        </div>
      </div>
    );
  }
}

export default App;
