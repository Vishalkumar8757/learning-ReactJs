import { Route, Routes } from "react-router-dom";
import Count from "./component/counter";
import Photochange from "./component/backimage";

 
import Layout from "./layout";
function App(){
  return(
    <>
    <Count/>
    <Photochange/>
    <Layout/>


    <Routes>
        <Route path = "/" element={<Layout/>}/> 
        <Route path="/count" element={<Count/>}/>
        <Route path="/photochange" element={<Photochange/>}/> 
    </Routes>
    </>
  )
}
export default App