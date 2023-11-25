import React from 'react'
import Message from './Message/Message'
import {Provider} from 'react-redux'
import {store} from './Redux/store'
import Product from './Component/Product'
import Login from "./Login/Login"
import Products from './Product/Products'

let App=()=>{

    return(
        <div>
            <Provider store={store}>
                <h1>Redux</h1>
                <hr/>
                <Message/>
                <hr/>

                
            </Provider>
            <Product/>
            <Login/>
            <hr/>
            <Products/>
        </div>
    )
}

export default App