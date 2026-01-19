import Ch4 from "./Ch4" 

function Ch3(props){
    return(
        <> 
        <h1> this is child 3 page </h1>
        <Ch4 data = {props.data}/>
        </>
    )
}
export default Ch3