import { useContext } from "react"
import{ cobject } from "../main"
function Child2(){
    let {name,age,city} = useContext(cobject)
    return(
        <>
          <h1>This i child 2 {age}</h1>

          {/* <cobject.Consumer> 
             {
                (data)=>{
                    return <h1> my name is {data}</h1>
                }
             }
           </cobject.Consumer> */}
        </>
    )
}
export default Child2