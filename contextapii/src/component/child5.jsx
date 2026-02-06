import { obj } from "../App"
function Child5(){
    return(
        <>
         <h1>This is Child5 page</h1>
         <obj.Consumer>
            {
                (data)=>{
                    return <h1>my name is {data}</h1>
                }
            }
         </obj.Consumer>
        </>
    )
}
export default Child5