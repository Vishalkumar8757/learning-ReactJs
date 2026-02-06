import { useState } from "react"
import { useNavigate } from "react-router-dom"
 

function Signup(){

    let [frmdata,setfrmdata]= useState({
        name:"",age:"",contact:"",username:"",password:""
    })

    let navigator = useNavigate()

    function handledata(e){
       let{name,value} =e.target
       setfrmdata({...frmdata,[name]:value})
    }

    function submit(e){
        e.preventDefault()
        console.log(frmdata)
        localStorage.setItem("userdata",JSON.stringify(frmdata))
        let savedata = JSON.parse(localStorage.getItem("userdata"))
        console.log(savedata) 
        navigator('./login')
    }

    // let a = JSON.parse(localStorage.getItem("userdata"))
    // console.log(a)
    return(
        <>
         <h1>Another signup page</h1>

         {/* <h1>{a.name}</h1> */}

         <form action="" onSubmit={submit}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" onChange={handledata} /> <br /> <br />

            <label htmlFor="">Age</label>
            <input type="text"  name="age"onChange={handledata} /> <br /> <br />

            <label htmlFor="">Contact</label>
            <input type="text"  name="contact"onChange={handledata} /> <br /> <br />

             <label htmlFor="">Username</label>
            <input type="text"  name="username"onChange={handledata} /> <br /> <br />

             <label htmlFor="">Password</label>
            <input type="text"  name="password"onChange={handledata} /> <br /> <br />

            <input type="submit" />
         </form>
        </>
    )
}
export default Signup