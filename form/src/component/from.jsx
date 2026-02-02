import { useState } from "react"

function Form(){

    let [frmdata,setfrmdata]= useState({
        name:"",age:"",contact:""
    })

    function handledata(e){
       let{name,value} =e.target
       setfrmdata({...frmdata,[name]:value})
    }

    function submit(e){
        e.preventDefault()
        console.log(frmdata)
    }
    return(
        <>
         <h1>Another form page</h1>

         <form action="" onSubmit={submit}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" onChange={handledata} /> <br /> <br />

            <label htmlFor="">Age</label>
            <input type="text"  name="age"onChange={handledata} /> <br /> <br />

            <label htmlFor="">Contact</label>
            <input type="text"  name="contact"onChange={handledata} /> <br /> <br />

            <input type="submit" />
         </form>
        </>
    )
}
export default Form