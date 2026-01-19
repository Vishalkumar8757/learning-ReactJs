import Ch3 from "./ch3"

function Ch2(props){
    return(
        <>
        <h1>child 2 page = {props.city}</h1>
        <Ch3 data ="special"/> 
        </>
    )
}
export default Ch2