import {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { user_Action } from '../Redux/User/User.action'


const User = () => {

    let dispatch=useDispatch()
    let users=useSelector((state)=>{
      return state.users
    })
    let [user,setUser]=useState([])
   

    useEffect(()=>{
      dispatch(user_Action())
    })
  return (
        <>
        <h1>User Component</h1>
          <pre>{JSON.Stringify(users)}</pre>
          
        </>
  )
}

export default User