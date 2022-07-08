import React, { Component } from 'react';
import { LeftMenu } from './components/LeftMenu.component/LeftMenu';
import { Topbar } from './components/Layouts/Topbar.component/Topbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <LeftMenu />
        <div className='main-app-container'>
          <Topbar/ >
          <div className='content-container'>
            <h2>CONTENT</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
