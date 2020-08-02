import React, { Component } from 'react'
import './App.css'

// this doesnt work yet :(
// import Test from './Test.react'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="appHeader">
          <Test />
          <p>
            Edit <code>src/App.jsx</code> and save to reload.
          </p>
          <a
            className="link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="link"
            href="https://rollupjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about RollupJS
          </a>
        </header>
      </div>
    )
  }
}

export default App