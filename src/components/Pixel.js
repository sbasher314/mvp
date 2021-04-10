import React, { Component } from 'react';

class Pixel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pixel" mood={this.props.mood}></div>
    );
  }
}

export default Pixel