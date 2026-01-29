import { useState } from "react"

function Count(){
    const[num1,setNum1] =  useState(0)
    return(
       <>
        <h1 style={{ color: "black" }}>{num1}</h1>
      <button onClick={() => setNum1(num1 + 1)}>+</button>
      <button onClick={() => setNum1(num1 - 1)}>-</button>
       </>
    )
}
export default Count