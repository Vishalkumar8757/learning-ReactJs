import { Link,Outlet } from "react-router-dom"

function Nvabar(){
    return(
        <>
         <div>
            <header>
                <h1>LOGO</h1>
                <ul>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/login">login</Link></li>
                  <li><Link to="/signup">Signup</Link></li>
                </ul>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                <h1>this is footer section</h1>
            </footer>
         </div>
        </>
    )
}
export default Nvabar