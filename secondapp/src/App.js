import React, { Component } from 'react'
import Regform from './Reg/Regform'
import Fact from './Fact/Fact'

 class App extends Component {
  render() {
    return (
        <>
        <h2>App Component</h2>
        <Regform/>
        <hr/>
        <Fact/>
      </>
    )
  }
}

export default App