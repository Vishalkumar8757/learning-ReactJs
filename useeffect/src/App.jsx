import { useEffect, useState } from "react"
import Con from "./component/condition"

function App(){
   let [ val ,setVal ]= useState(0)
   let [num,setNum] = useState(20)
  useEffect(()=>{alert("Without depencencies")},[num])
   return(
  
    <>
    <h1>without dependencies page</h1>
    <h1>{val}</h1>
    <button onClick={()=>setVal(val+1)}>+</button>

    <h1>{num}</h1>
    <button onClick={()=>setNum(990)}>change</button>
    <Con/>
    </>
   )
}
export default App 