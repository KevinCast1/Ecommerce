import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/components/NavBar"

function Layout(){
    return(
        <div>
            <header>
                <NavBar/>
            </header>

            <div className="container mx-auto py-8">
                <Outlet/>
            </div>
        

            <footer className=" bg-rose-900 py-8 text-white">
                <div className="container mx-auto">
                    Powered by Kevin Castillo - Curso React
                </div>
            </footer>
        </div>
    )
}

export default Layout;