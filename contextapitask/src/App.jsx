 
import { createContext } from "react"
import Child1 from "./component/child1"
import Child3 from "./component/child3"


   let obj =  createContext()
   let data = {
       name:"vishal kumar", age:20, city:"bhopal", contact:8757
   }  

function App(){
    return(
        <>
        <h1>This is App page</h1>
        <obj.Provider value={data}> 
         <Child1/>
         <Child3/>
         </obj.Provider>
        </>
    )
}
export default App
export {obj}