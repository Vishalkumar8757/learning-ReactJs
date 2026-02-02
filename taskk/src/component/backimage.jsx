import { useState } from "react"

function Photochange(){
     let [photo,photoSet]= useState(<img src="public/vite.svg" alt=" " height="200px"/>)
    return(
        <>
         
         <h1> {photo}</h1>

      <button onClick={() => photoSet(<img src="public/vite.svg" alt="" height="200px" />)}><img src=" public/vite.svg" alt=" " height="200px"/></button>
      <button onClick={() => photoSet(<img src="public/photo-1759667642661-97dcfb78e8a6.avif " alt="" height="200px" />)}><img src="public/photo-1759667642661-97dcfb78e8a6.avif " alt="" height="200px" /></button>
      <button onClick={() => photoSet(<img src=" public/premium_photo-1759793983961-7e09096b38e2.avif" alt="" height="200px" />)}><img src="public/premium_photo-1759793983961-7e09096b38e2.avif " alt="" height="200px" /></button>
        
        </>
    )
}
export default Photochange