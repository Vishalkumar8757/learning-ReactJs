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

     {/* {
        apidata.map((e) => (
          <> 
           <h1>{e.id}</h1>
           <h1>{e.title}</h1>
           <h1>{e.body}</h1>
            <hr />
          </>
        ))
      } */}

        <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {apidata.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.title}</td>
              <td>{e.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </>
  )
}
export default App