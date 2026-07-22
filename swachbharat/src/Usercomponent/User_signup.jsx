// import { useState } from "react";
// // import User_login from "./User_login";

// function User_signup(){
//     const[initial,finalstate]=useState(0);
//     const[userName,setuserName]=useState("vishal");
     
//     return(
//         <>
//         <h1>this is User_signup page</h1>
//         <h1>value={initial}</h1>
//         <button onClick={()=>finalstate(initial+1)}>+</button>
//         <button onClick={()=>finalstate(initial-1)}>-</button>

//         <h1>Your name ={userName}</h1>
//         <input type="text" value={userName}
//         onChange={(e)=>setuserName(e.target.value)}
        
//         />
         
//         {/* <User_login/> */}
//         </>
//     )
// }
// export default User_signup;
import { useState } from "react"
export default function User_signup() {
    const [APIDATA,SETAPIDATA]=useState([])
    const [formdata,SetFormdata]=useState({
        name:"Enter your name",
        email:"Enter your mail",
        mobile:"Enter mobile",
        password:"Enter password"
    });
    const Handleinput=(e)=>{
        const {name,value}=e.target;
        SetFormdata({
            ...formdata,
            [name]:value
        })

    }
const Handlesubmit=(e)=>{
    
    // alert(formdata);
    // console.log(formdata);   

}
const API="http://localhost:3000/users";
const Api_data = async()=>{
     
}


    

    return(
        <>
        <h1>react form handelling with use state</h1>
        <form action="" onSubmit={Handlesubmit}>
            name:<input type="text" name="name" value={formdata.name} onChange={Handleinput}/> <br />
            email:<input type="text" name="email" value={formdata.email} onChange={Handleinput} /> <br />
            mobile:<input type="text" name="mobile" value={formdata.mobile} onChange={Handleinput}/> <br />
            password:<input type="text"name="password" value={formdata.password} onChange={Handleinput}/> <br />
            <button type="submit">Register</button>
        </form>
        <h1>Nmae={formdata.name}</h1>
        </>
    )
    
}