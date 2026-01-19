import N from "./Component/Nav"
import B from "./Component/Bottom"
import H from "./Component/Home"
import { About as A,Contact } from "./Component/About"
 
 
 

function App(){
  let name = "vishal"
  let name1 = "vishal"
  let name2 = "vishal"
  let name3 = "vishal"
  let name4 = "vishal"

  let person = {
    pname : "vishal",
    age:20,
    phoneno:8757372118
  }

  let mystyle= {
    backgroundColor:"tamato",
    padding:"20px"
  }

  return(
    <>
    <h1 style={{backgroundColor:"pink",padding:"40px"}}>welcome to react class</h1>
    <h1 style={{backgroundColor:"blueviolet"}}>welcome to react class</h1>
    <h1 style={mystyle}>welcome to react class</h1>
    <h1>welcome to react class</h1>
    <nav/>
    <N/>
    <B/>
    <H/> 
    <A/>
    
    <Contact/>
     
    <h1> 
    {name}  <br />

    {name1} <br />

    {name2}  <br />

    {name3}  <br />

    {name4}  <br />
    </h1>

    <h1 style={{backgroundColor:"red",padding:"20px"}}>my name is :{person.pname}</h1>
    <h1>my age is :{person.age}</h1>
    <h1>my phone number is :{person.phoneno}</h1>
    </>
  )
}
export default App