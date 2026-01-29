import { useState } from "react"

function Photochange(){
     let [photo,photoSet]= useState(<img src="OIP (1).jpg" alt=" " height="200px"/>)
    return(
        <>
         
         <h1> {photo}</h1>

      <button onClick={() => photoSet(<img src="public/OIP (1).jpg" alt="" height="200px" />)}><img src="OIP (1).jpg" alt=" " height="200px"/></button>
      <button onClick={() => photoSet(<img src="public/OIP (2).jpg" alt="" height="200px" />)}><img src="public/OIP (2).jpg" alt="" height="200px" /></button>
      <button onClick={() => photoSet(<img src="public/OIP.jpg" alt="" height="200px" />)}><img src="public/OIP.jpg" alt="" height="200px" /></button>
        
        </>
    )
}
export default Photochange