import React, { Component } from 'react';
import Header from './Header.jsx';
import GameContainer from './GameContainer.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GameContainer />
      </div>
    );
  }
}
