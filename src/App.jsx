import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import "./App.css";
import { ItemsListContainer } from "./components/ItemsListContainer/ItemsListContainer";


function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="category" element={<ItemsListContainer/>}/>           
                </Route>
            </Routes>
        
        </BrowserRouter>
    )

}

export default App;