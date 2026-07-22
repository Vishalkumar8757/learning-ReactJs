import { Routes ,Route } from "react-router-dom"
import Insert from "./insert"
import Fetch from "./fetch"
function App(){
  return(
    <>
      <Routes>
        <Route index element={<Insert/>}/> 
        <Route path ='/fetch' element={<Fetch/>}/> 
      </Routes>
      
    </>
  )
}
export default App