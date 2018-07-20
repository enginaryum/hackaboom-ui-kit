import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Components from './componentExamples'


class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Components />
      </div>
    )
  }
}


export default App
