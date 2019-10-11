import React, { Component } from 'react';

import { HashRouter } from 'react-router-dom';
import AppRouter from './routes';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <AppRouter />
      </HashRouter>
    );
  }
}

export default App;
