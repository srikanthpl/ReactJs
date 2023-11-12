import React from 'react'
import Navbar from "./Nav/Navbar"
import Product from "./Products/Product"
import Employee from "./ListRendering/Employee"

let App=()=>{
    return <div>

        <Navbar/>
        <Product/>
        <hr/>
        <Employee/>
    </div>
}
export default App