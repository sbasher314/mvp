import React, { Component } from 'react';
import Tracker from './components/Tracker';
import LogForm from './components/LogForm';
import Navbar from './components/Navbar';
import GoogleLogin from './components/GoogleLogin';
import SettingsBtn from './components/SettingsBtn';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'anonymous',
      isLogin: false
    };
  }

  login(username) {
    this.setState({username});
    console.log(this.state);
  }

  render() {
    return (
      <div className = 'main'>
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