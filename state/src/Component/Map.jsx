function Map(){
    let person= [
        {
        name : "vishal", age: 20 ,city:"bhopal"
        },
        {
        name : "manyank", age: 20 ,city:"bihar"
        }
    ]
    
    return(
       <>
       {
        person.map((e)=>(<h1>{e.name}</h1>))
       }
       </>
    )
}
export default Map