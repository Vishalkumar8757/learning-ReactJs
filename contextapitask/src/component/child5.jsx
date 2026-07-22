 
 import { useContext } from "react"
import { obj } from "../App"
 
function Child5(){
    let {name,age,city,contact} = useContext(obj)
    return(
        <>
        <h1>This is child5 page{city}</h1>
          {/* <obj.Consumer>
            {
                (data)=>{
                    return <h1>my name is {data}</h1>
                }
            }
         </obj.Consumer> */}
         
        </>
    )
}
export default Child5