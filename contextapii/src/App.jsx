
import { createContext } from "react"
import Child1 from "./component/child1"

let obj = createContext()
let name  = "vishal kumar"
function App(){ 
  return(
    <>
     <h1>This is App page</h1>
     <obj.Provider value={name}> 
        <Child1/>
     </obj.Provider>
    </>
  )
}
export default App
export {obj}