import Ch2 from "./Ch2"

function Ch1(props){
    return(
        <>
        
        <h1>This is ch1</h1>

        <Ch2 city= {props.city}/>
        </>
    )
}
export default Ch1