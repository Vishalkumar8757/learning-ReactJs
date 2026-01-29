import { Outlet,Link } from "react-router-dom"


function layout(){
    return(
        <>
        <header>
            <nav>
                <h1>LOGO</h1>
                <ul>
                    <li> <Link to = "/home"> Home </Link></li>
                    <li> <Link to = "/about"> About </Link></li>
                    <li> <Link to='/contact'>Contact</Link> </li> 
                    <li>  <Link to='/help'>Help</Link> </li>
                    <li> <Link to='/blog'>Blog</Link> </li> 
                </ul>
            </nav>
        </header>

        <main>
            <Outlet/>
        </main>

        <footer>
            <h1>footer section</h1>
        </footer>
        
        </>
    )
}
export default layout