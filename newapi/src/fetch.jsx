import axios from "axios"
import { useEffect, useState } from "react"

function Fetch(){
   let[data ,setData] = useState([])

  let [show ,setShow] = useState(false)

 let [editfrm , seteditfrm] =  useState([])

  function mydelete(id){
    axios.delete(`http://localhost:3000/userdata/${id}`)
    .then(()=>alert("Delete successfully"))
  }

  function handleupdate(e){
    const {name ,value} = e.target
    seteditfrm({...editfrm,[name]:value})
  }

  function finalupdate(e){
    e.preventDefault()
    axios.put(`http://localhost:3000/userdata/${editfrm.id}`,editfrm)
    .then((e)=>alert("update successfull"))
  }

   useEffect(()=>{
    axios.get('http://localhost:3000/userdata')
    .then((r)=>setData(r.data))
   },[mydelete])
  return(
    <>
      <h1>This is Fetch page</h1>
      <h1>get data</h1>

      <table border="">
        <tr>
          <th>Id</th>
          <th>name</th>
          <th>city</th>
          <th>age</th>
          <th>contact</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      {
        data.map((e)=>( <tr>
          <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.city}</td>
          <td>{e.age}</td>
          <td>{e.contact}</td>
          <td> <button onClick={()=>mydelete(e.id)}> Delete data</button></td>
          <td> <button onClick={()=>(setShow(true),seteditfrm(e))}>Edit</button></td>
        </tr> ))
      }  
      </table>
      <br />

      {
        show && <form action="" onSubmit={finalupdate}>
          <label htmlFor="">id</label>
          <input type="text"  value={editfrm.id} name='id' onChange={handleupdate} /> <br /><br />

           <label htmlFor="">name</label>
          <input type="text" value={editfrm.name}   name='name' onChange={handleupdate} /> <br /><br />

           <label htmlFor="">city</label>
          <input type="text" value={editfrm.city}  name='city' onChange={handleupdate}/> <br /><br />

           <label htmlFor="">age</label>
          <input type="text" value={editfrm.age}  name='age' onChange={handleupdate} /> <br /><br />

           <label htmlFor="contact">contact</label>
          <input type="text" value={editfrm.contact}  name='contact' onChange={handleupdate} /> <br /><br />

          <input type="submit" />
        </form>
      }
    </>
  )
}
export default Fetch