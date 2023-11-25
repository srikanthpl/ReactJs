import React from 'react'
import {gmAction,gnAction} from '../Redux/message/message.action'
import {useDispatch,useSelector} from 'react-redux'

const Message=()=>{
    let dispatch=useDispatch()
    let message = useSelector((state)=>{
        return state
    })


   let gmHandler=()=>{
    dispatch(gmAction())
   }

   let gnHandler=()=>{
    dispatch(gnAction())
   }

    return(
        <div>
            <h3>Message Component</h3>
            <h3>Value:{message.msg}</h3>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    )
}
export default Message