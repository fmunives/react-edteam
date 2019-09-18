import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import MainApp  from './MainApp';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return <MainApp />
  }
}

render(<App />, document.getElementById('root'));
