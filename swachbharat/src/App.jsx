//  import User_signup from "./Usercomponent/User_signup"
import Nav from "./projectLayout/Nav"
import Home from "./projectLayout/Home"
import Footer from "./projectLayout/Footer"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import About from "./projectLayout/About"
import Service from "./projectLayout/Services"
import User_signup from "./Usercomponent/User_signup"
import Contact from "./projectLayout/Contact"
  



function App() {
   let var1 = [1,2,3,4,5,6,7,8,9,];
   let var2 = ["a","b","c","d"];

  return (
    <> 
     <Router>

        <Nav data = {var1} data1 = {var2} /> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<User_signup/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

      </Router>
    
  
    
        
     
    </>
  )
}

export default App
