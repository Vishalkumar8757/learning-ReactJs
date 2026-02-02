 import { Outlet,Link } from "react-router-dom"


function Layout(){
    return(
        <>
        <header>
            <nav>
                <h1>LOGO</h1>
                <ul>
                    <li> <Link to = "/counter"> Counter</Link></li>
                    <li> <Link to = "/backimage"> Backimag </Link></li>
                     
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
export default Layout