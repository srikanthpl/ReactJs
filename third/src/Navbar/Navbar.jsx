import React from 'react'
import {Link} from 'react-router-dom'



class Navbar extends React.Component{

    render(){

        return<nav>
            <a href="./Logo"> Logo</a>
            <div>
                <ul>
                    <li><Link to="./Home">Home</Link></li>
                </ul>
            </div>
        </nav>
    }
}
export default Navbar