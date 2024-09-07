import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import "./App.css";
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<ItemsListContainer/>}/>
                    <Route path="category/:categoryId" element={<ItemsListContainer/>}/>    
                    <Route path="item/:itemId" element={<ItemDetailContainer/>}/>   
                    <Route path="*" element={<h1>404 Página no encontrada</h1>}/>            
                </Route>
            </Routes>
        
        </BrowserRouter>
    )

}

export default App;