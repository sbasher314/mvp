import React, { Component } from 'react';
import Tracker from './components/Tracker';
import LogForm from './components/LogForm';
import Navbar from './components/Navbar';
import GoogleLogin from './components/GoogleLogin';

class App extends Component {
  log() {
    console.log('sup');
  }
  render() {
    return (
      <div className = 'main'>
        <button onClick={this.log}>click me</button>
        <nav className="navbar">
          <GoogleLogin />
        </nav>
        <Tracker type="week"></Tracker>
        <LogForm type="mood"></LogForm>
      </div>
    );
  }
}
export default App;