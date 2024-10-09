import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./pages/Layout";
import "./App.css";
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {CartProvider} from './context/CartContext'
import Cart from './components/Cart/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App(){

    return(
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<ItemsListContainer/>}/>
                        <Route path="category/:categoryId" element={<ItemsListContainer/>}/>  
                        <Route path="item/:itemId" element={<ItemDetailContainer/>}/>     
                        <Route path="/cart" element={<Cart/>}/>  
                        {/* <Route path="/checkout" element={<Checkout/>}/>    */}
                        <Route path="*" element={<h1>404 Página no encontrada</h1>}/>            
                    </Route>
                </Routes>                
            </CartProvider>        
        </BrowserRouter>
    )
}

export default App;