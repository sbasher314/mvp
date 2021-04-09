import React, { Component } from 'react';
import Tracker from './components/Tracker';
import LogForm from './components/LogForm';
import Navbar from './components/Navbar';
import GoogleLogin from './components/GoogleLogin';
class App extends Component {
  render() {
    return (
      <div className='main'>
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