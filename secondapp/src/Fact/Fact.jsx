import React, { useMemo, useState } from 'react'

const FactComp = () => {
     let [qty,setQty]=useState(1)
     let [num,setNum]=useState(5)
     //let factValue = calFactorail(num)
    //  to avoid rerendering on console level we uses the Memo
    let factValue = useMemo(()=>{return calFactorial(num)},[num])
    // let factValue=calFactorial(num)
  return <>
  <div>
        <h1>Factorial Ex</h1>
        <h3>Product Qty:{qty}</h3>
        <h3>Factorila of {num} is:{factValue}</h3>
       <button onClick={()=>{setQty(qty+1)}}>+</button>
       <button onClick={()=>{setNum(num+1)}}>Fact+1</button>
    </div>
  </>
}
let calFactorial = (n)=>{

    let result=1
    for(let i=n; i>=1;i--){
        result = result*i
    }
    console.log("Factorial of Given is "+ result)
    return result
}

export default FactComp