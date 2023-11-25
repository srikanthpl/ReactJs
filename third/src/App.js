import React from 'react'
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Form from './FormVal/Form'
import Navbar from './Navbar/Navbar'


let App=()=>{

    return (
        <BrowserRouter>
        <h1>Routing</h1>    
        <Switch>
            <Route  path="/home" component={Navbar}/>
            <Route  path="/form" component={Form}/>
            
        </Switch>
        </BrowserRouter>
    )    
}
export default App