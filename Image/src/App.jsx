import  M from './assets/react.svg'
import Image from './Component/image'
// import  N from './assets/OIP (2).jpg'

function  App(){
  return(
    <> 
    <h1>This image from public folder</h1>
    <img src="vite.svg" height="200px" alt="" />

    <h1>This image from src assect folder</h1>
    <img src={M} height= "200px"alt="" />

   <Image/>

    </>
  )
}
export default App