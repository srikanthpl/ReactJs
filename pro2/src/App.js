import React from 'react'
import Navbar from "./Nav/Navbar"
import Product from "./Products/Product"
import Employee from "./ListRendering/Employee"
import User from './complifecycle/User'
import User1 from './complifecycle/User1'
import Dclock from './DigitalClk/Dclock'

let App=()=>{
    return <div>

        <Navbar/>
        <Product/>
        <hr/>
        <Employee/>
        <hr/>
        <User/>
        <hr/>
        <Dclock/>
        <hr/>
        <User1/>
    </div>
}
export default App