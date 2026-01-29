import { Link,Route,Routes } from "react-router-dom"
// import { Route,Routes } from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import Help from "./component/Help"
import Blog from "./component/Blog"
import Navbar from "./component/Navbar"
import Layout from "./component/Layout"

function App(){
  return(
    <>
    {/* <Navbar/> */}

        {/* <Link to='/'>Home</Link> <br />
        <Link to='/about'>About</Link><br />
        <Link to='/contact'>Contact</Link> <br />
        <Link to='/help'>Help</Link> <br />
        <Link to='/blog'>Blog</Link> <br /> */}

    
      
      <Routes>
        <Route path = "/" element={<Layout/>}> 

        {/* <Route index element={<Home/>}/> */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/blog" element={<Blog/>}/>
         
       </Route>
      </Routes>
    </>
  )
}
export default App  