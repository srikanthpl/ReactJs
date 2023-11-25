import React,{useState} from "react"

let Product = ()=>{

    let [count,setCount]=useState(1)

    return(
        <div>
            <h3>Functionalcomp</h3>
            <button onClick={()=>{setCount(count>=1?count-1:count)}} 
            disabled={count === 0}>-</button>
            <span>{count}</span>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            {/* <button disabled={true}>Disabled Button</button> */}

            
        </div>
    )
}

export default Product