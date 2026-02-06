import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){

    let [frmdata,setfrmdata]= useState({
        username:"", password:""
    })

    function handledata(e){
       let{name,value} =e.target
       setfrmdata({...frmdata,[name]:value})
    }

    let  navigator = useNavigate()

    function submit(e){
        e.preventDefault()
        let localdata = JSON.parse(localStorage.getItem('userdata'))
        if(frmdata.username != localdata.username || frmdata.password!=localdata.password){
          alert("user not found")
        }
        else{
          navigator('/')
        }
      }
    return(
        <>
         <h1> login page</h1>

         {/* <h1>{a.name}</h1> */}

        
          <form action="" onSubmit={submit}>
            <label htmlFor="">username</label>
            <input type="text" name="username" onChange={handledata} /> <br /> <br />

            <label htmlFor="">password</label>
            <input type="text"  name="password"onChange={handledata} /> <br /> <br />


            <input type="submit" />
          </form>
         
        </>
    )
}
export default Login