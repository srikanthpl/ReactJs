import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './CRUD/Home'
import CreatePro from './CRUD/CreatePro'
import Admin from './CRUD/Admin'
import Product from './CRUD/Product'
const App = () => {
 return <>
 <Router>
         <Navbar/>
         <Routes>
            <Route path="/home" element={<Home/>}/>  
            <Route path="/products" element={<Product/>}/>  
            <Route path="/admin" element={<Admin/>}/>  
            <Route path="/create" element={<CreatePro/>}/>  
         </Routes>
 </Router>
 </>
}

export default App