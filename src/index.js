import React from "react";
import './index.css'; 
import ReactDOM from "react-dom/client";
import { NavBar } from "./components/NavBar/components/NavBar";
import { ItemsListContainer } from "./components/ItemsListContainer/ItemsListContainer";


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

function App(){
    return (
        <>
         <NavBar/>
         <ItemsListContainer greetings ="Kevin Castillo"/>
        </>
    )
}

root.render(<App/>);    