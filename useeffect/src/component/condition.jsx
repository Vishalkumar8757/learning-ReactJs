import { useState } from "react"

function Con(){
    let [val,setVal] = useState(true)
     
    return(
        <>
         {val ? <h1>get ready</h1> : <h1>not ready</h1>}

         <button onClick={()=>setVal(!val)}>change</button>

        </>
    )
}
export default Con