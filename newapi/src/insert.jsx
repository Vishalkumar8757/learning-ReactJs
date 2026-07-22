import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Insert(){

 let [frmdata ,setFramdata] =  useState({})
 let nav = useNavigate()

function handleinput(e){
  let {name, value} = e.target
  setFramdata({...frmdata,[name]:value})
}

function handlesubmit(e){
  e.preventDefault()
  axios.post('http://localhost:3000/userdata',frmdata)
  .then((r)=>alert("sucess..."))
  nav('./fetch')
}
  return(
    <>
      <h1>This is insert page</h1>
      <form action="" onSubmit={handlesubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" onChange={handleinput} /> <br /><br />

        <label htmlFor="">city</label>
        <input type="text" name="city" onChange={handleinput} /> <br /><br />

        <label htmlFor="">age</label>
        <input type="text" name="age" onChange={handleinput} /> <br /><br />

        <label htmlFor="">contact</label>
        <input type="text" name="contact" onChange={handleinput} /> <br /><br />

         
        <input type="submit" />   
      </form>
    </>
  )
}
export default Insert