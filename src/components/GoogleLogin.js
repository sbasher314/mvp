import React, { Component } from 'react';

class GoogleLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'anonymous',
      isSignedIn: false,
    };
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', () => {this.handleLoad()});
  }

  onSuccess(e) {
    console.log('signed in!', e);
    this.setState({isSignedIn: true});
  }

  signOut() {
    console.log('signing out...');
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });

  }

  handleLoad() {
    let success = this.onSuccess.bind(this);
    window.gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        'client_id': '585844019102-b7fqke5cs6uv8qqe8qo4ijo3tjfjams3.apps.googleusercontent.com',
      });

      this.auth2.then(() => {
        this.setState({
          isSignedIn: this.auth2.isSignedIn.get()
        });
      });
    });

    window.gapi.load('signin2', () => {
      let opts = {
        width: 200,
        height: 50,
        'client_id': '585844019102-b7fqke5cs6uv8qqe8qo4ijo3tjfjams3.apps.googleusercontent.com',
        onSuccess: success
      };
      gapi.signin2.render('loginButton', opts);
    });
  }

  render() {
    return (
      <div className='authBtn'>
        {this.state.isSignedIn ?
          <div id='logoutButton' onClick={this.signOut}>Logout</div> :
          <div id='loginButton'>Login with google</div>
        }
      </div>

    );
  }
}

export default GoogleLogin;