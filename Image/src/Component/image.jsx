import  N from '../assets/OIP (2).jpg'

function  Image(){
  return(
    <> 

    <h1>This image from public folder</h1>
    <img src="OIP(1).jpg" height="200px" alt="" />
    {/* <img src="OIP.jpg" alt="" /> */}

     <h1>This image from src</h1>
     <img src={N} alt="" />

    </>
  )
}
export default Image