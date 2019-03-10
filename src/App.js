import React, { Component } from 'react';
import './App.css';

class App extends Component {

  // On Class Load set Default State
  state = { toggle: false };

  render() {
    let onOrOff = '';

    if(this.state.toggle === true) {
      onOrOff = "ON";
    } else {
      onOrOff = "OFF";
    }

    return (
      <button onClick={this.toggleButton}>{ onOrOff }</button>
    );
  }

  toggleButton = () => {
    if(this.state.toggle === true) {
      this.setState( { toggle: false } );
    } else {
      this.setState( { toggle: true } );
    }
  }
}

export default App;
