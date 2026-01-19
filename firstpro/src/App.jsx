import Vishal from "./Child1"
import { About as Fun} from "./About"
import { About1 as Fun1} from "./About"
import './App.css'
function App(){
let name = "vishal"
let mystyle = {
  background:"blue",
  color:"white",
  padding:"20px"
}

  return(
    <> 
    <div>
    <h1 style={{background:"red",padding:"12px",color:"white"}}>vishal naam h mera</h1>
    <h1 style={mystyle}>my name is {name}</h1>
    <Vishal />
    <Fun />
    {/* <About /> */}
    <Fun1 />
    {/* <About1 /> */}
    </div>

    <section className="container">
      <h1>Lorem ipsum dolor sit amet.</h1>
      <hr/>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci aperiam<br/> officiis ut obcaecati quas, vel sint? Dolore tempora, vitae aperiam molestias perspiciatis earum itaque beatae. Perspiciatis deserunt natus cum aspernatur.</p>
      <button>get stared</button>

    </section>
    </>
  )
}
export default App