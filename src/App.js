import React, { Component } from 'react';
import Tracker from './components/Tracker';
import LogForm from './components/LogForm';
import Navbar from './components/Navbar';
import GoogleLogin from './components/GoogleLogin';
import axios from 'axios';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      trackerType: 'week',
      logs: [
        {
          date: new Date('4/04/2021'),
          mood: 'happy',
          description: 'Today was a good day'
        },
        {
          date: new Date('4/05/2021'),
          mood: 'sad',
          description: 'I lost my wallet'
        },
        {
          date: new Date('4/06/2021'),
          mood: 'neutral'
        },
        {
          date: new Date('4/08/2021'),
          mood: 'angry'
        },
        {
          date: new Date('4/09/2021'),
          mood: 'anxious',
          description: 'there\'s a big test tomorrow'
        },
        {
          date: new Date('4/10/2021'),
          mood: 'excited',
          description: 'I get the day off!'
        }
      ],
      isSignedIn: false,
      loaded: false
    }
  }

  getUser() {
    return window.gapi.auth2.getAuthInstance().currentUser.get();
  }

  getHistory() {
    let user = this.getUser();
    this.setState({loaded: true});
    if (user.isSignedIn()) {
      this.setState({isSignedIn: true})
      return axios.get('/history', {user, type: this.trackerType})
        .then(data => this.setState({logs: data}));
    } else {
      this.setState({isSignedIn: false, logs: []})
    }
  }

  render() {
    console.log('rendering: ', this.state);
    return (
      <div className='main'>
        <nav className="navbar">
          <GoogleLogin onLoad={() => this.getHistory()} onChange={() => this.getHistory()}/>
        </nav>
        <Tracker type={this.state.trackerType} logs={this.state.logs} visible={this.state.loaded} isSignedIn={this.state.isSignedIn}></Tracker>
        <LogForm type="mood"></LogForm>
      </div>
    );
  }
}
export default App;