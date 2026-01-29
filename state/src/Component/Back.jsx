import { useState } from "react"

function Red(){
    let [color,setColor] =useState()
    return(
      <>
        <div style={{backgroundColor:color,height:"200px"}}>
            <button onClick={()=>setColor('red')}>Red</button>
             <button onClick={()=>setColor('yellow')}>yellow</button>
             <button onClick={()=>setColor('blue')}>blue</button>
            

        </div>
      </>
    )
}
export default Red  