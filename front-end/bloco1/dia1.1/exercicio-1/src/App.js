import logo from './logo.svg';
import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
};

const Compromissos = ['compromisso1', 'compromisso2', 'compromisso3']

class App extends React.Component {
  render() {
    return (
      <ul>
        { Compromissos.map((compromisso) => Task(compromisso)) }
      </ul>
    );
  }
}

export default App;
