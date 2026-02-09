import axios from "axios"
import { useEffect, useState } from "react"

function App(){

 let [apidata , setapidata ] =  useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> setapidata(res.data))
  },[])
  return(
    <>
     <h1>This is app page</h1>

     {
        apidata.map((e) => (
          <> 
           <h1>{e.id}</h1>
           <h1>{e.title}</h1>
           <h1>{e.body}</h1>
            <hr />
          </>
        ))
      }
     
    </>
  )
}
export default App