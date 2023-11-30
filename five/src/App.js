import React, { Component } from 'react'
import {store} from './Redux/store'
import Provider  from 'react'
import User from './User/User'


 class App extends Component {
  
  render() {
    return (
      <>
      <h1>App Component</h1>
      <Provider store={store}>
      <User/>
      </Provider>
      
      </>
    )
  }
}

export default App