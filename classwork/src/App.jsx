import { Route, Routes } from "react-router-dom"
import Login from "./Component/Login"
import Signup from "./Component/signup"
import Nvabar from "./Component/navbar"
import Home from "./Component/home"
import About from "./Component/about"

function App() {
  return (
    <>

     <Routes>

    <Route path="/" element={<Nvabar/>}>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Route>
      <Route path="/signup" element = {<Signup/>}/>
      <Route path ="/login" element = {<Login/>}/>
      
     </Routes>

    </>
  )
}

export default App