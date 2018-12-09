import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { FuncGreetings, PureGreetings, CustomerStore } from './ex-context'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Context Example</p>
        <CustomerStore>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <PureGreetings />
            <FuncGreetings />
          </div>
        </CustomerStore>
      </div>
    )
  }
}

export default App
