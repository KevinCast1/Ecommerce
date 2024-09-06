import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/components/NavBar"

function Layout(){
    return(
        <div>
            <header>
                <h1>Kevin Web</h1>
            </header>
            <NavBar/>
            <Outlet/>
            <footer>
                <p>
                    Powered by Kevin
                </p>
            </footer>
        </div>
    )
}

export default Layout;