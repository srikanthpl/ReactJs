import React from 'react'
import {useRef,useState} from 'react' 

const Regform = () => {
    let [check,setCheck]=useState(false)
    let btn =useRef(null)
    // let Handler=(event)=>{
    //     btn.current.disabled=!event.target.checked
    // }
  return (
    <>
        <h2>Registration Form</h2>
        <label>Email</label>
        <input type="text"/><br/><br/>
        <label>Phone Number</label>
        <input type="number"/><br/><br/>
        <label>Password</label>
        <input type="password"/><br/><br/>
        <input type="checkbox"/>please Read Terms and Conditions<br/>
        <input type="submit" value="Submit" disabled  ref={btn} />
        
    </>
  )
}

export default Regform