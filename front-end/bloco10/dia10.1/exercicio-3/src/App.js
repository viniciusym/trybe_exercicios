// App.js
import React from 'react';

import Header from './Header';
import Content from './content';
import Footer from './Footer';

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer  />
      </div>
    );
  }
}

export default App;