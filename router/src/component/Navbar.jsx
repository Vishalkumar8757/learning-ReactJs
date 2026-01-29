import {Link } from "react-router-dom"
function navbar(){
    return(
        <>
        <nav>
            <h1>LOGO</h1>
            <ul>
                <li> <Link to="/home"> Home </Link></li>
                <li> <Link to="/about"> About </Link></li>
                
            </ul>
        </nav>
        </>
    )
}
export default navbar