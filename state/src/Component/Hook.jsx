import { useState } from "react"

function Hook(){

    let [num,setnum] = useState(20)

    function fun (){
        setnum("updated value is 30")
    }
    return(
        <>
         <h1>Hook page ={num} </h1>
         <button onClick={fun}>change</button> <hr />

         <button onClick={()=>setnum("update")}>tap</button>
        </>
    )
}
export default Hook