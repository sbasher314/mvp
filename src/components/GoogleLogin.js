import React, { Component } from 'react';

class GoogleLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isSignedIn: false,
    };
    this.signOut = this.signOut.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', () => {this.handleLoad()});
  }

  onSuccess(e) {
    console.log('success! ', e);
    this.setState({user: e, isSignedIn: true});
  }

  signOut() {
    console.log('signing out...');
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      this.setState({user: {}, isSignedIn: false})
      console.log('User signed out.');
    });

  }

  handleLoad() {
    console.log(process.env.GOOGLE_ID);
    window.gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        'client_id': process.env.GOOGLE_ID,
      });

      this.auth2.then((e) => {
        console.log('auth: ', e)
        this.setState({
          user: e.currentUser.get(),
          isSignedIn: this.auth2.isSignedIn.get()
        });
      });
    });

    window.gapi.load('signin2', () => {
      let opts = {
        width: 200,
        height: 50,
        'client_id': process.env.GOOGLE_ID,
        onsuccess: this.onSuccess
      };
      gapi.signin2.render('loginButton', opts);
    });
  }

  render() {
    return (
      <div className='authBtn'>
          <div hidden={!this.state.isSignedIn} id='logoutButton' onClick={this.signOut}>
            <img src={this.state.isSignedIn ? this.state.user.getBasicProfile().getImageUrl() : ''} />
            <span>Logout</span>
          </div>
          <div hidden={this.state.isSignedIn} id='loginButton'></div>
      </div>

    );
  }
}

export default GoogleLogin;