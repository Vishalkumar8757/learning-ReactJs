 

import { useState } from "react"
import Form from "./component/from"

function App(){
  // let [frmdata,setfrmdata]=useState()
  // function handledata(e){
  //   // console.log(e.target.value) ye cansile pe print krme kle liye ha
  //   setfrmdata(e.target.value)
  // }
  // function submitfunction(e){
  //   e.preventDefault()
  //   console.log(frmdata);

  // }
  // // ==========================================
  // let[dist,setdist]=useState()
  // function submitfun1(i){
  //  i.preventDefault()
  //  console.log(dist)
  // } 
  // function handledist(i){
  //   setdist(i.target.value)
  // }
  // // ===================================================
  //  let[state,setstate]=useState()
  // function submitfun2(j){
  //  j.preventDefault()
  //  console.log(state)
  // } 
  // function handlestate(j){
  //   setstate(j.target.value)
  // }
  return (
     <>
     {/* // <h1>App page</h1>
    // <h1>{frmdata}</h1>
    // <form action="" onSubmit={submitfunction}>
    //   <label htmlFor="" >Name</label>
    //   <input type="" onChange={handledata} /><br/>
    //   <input type="submit" onClick={()=>{console.log}} />

    // </form>
     
    // <form action="" onSubmit={submitfun1}>
    //   <label htmlFor="">dist</label>
    //   <input type="text" onChange={handledist} /><br />
    //   <input type="submit" onClick={()=>{console.log}} />
    
    // <h1>{state}</h1>
    //  <form action="" onSubmit={submitfun2}>
    //   <label htmlFor="">state</label>
    //   <input type="text" onChange={handlestate} /><br />
    //   <input type="submit" onClick={()=>{console.log}} /> */}
     {/* <form> */}
   

    <Form/>
    </>
  )
}
export default App