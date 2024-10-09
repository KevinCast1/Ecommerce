import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
// import CartItem from '../CartItem/CartItem';
import { Link } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import {collection, getFirestore, addDoc} from 'firebase/firestore'

const Cart = () => {

    const { cart, clearCart,  totalQuantity, total } = useContext(CartContext)

    const handleVaciar = () => {
        clearCart()
    }

    const [buyer, setBuyer] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const [error, setError] = useState({
        name: "",
        phone: "",
        email: ""
    })    

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name] : e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        const localError = {}

        if(!buyer.name){
            localError.name = "El nombre es obligatorio"
        }
        if(!buyer.phone){
            localError.phone = "El teléfono es obligatorio"
        }
        if(!buyer.email){
            localError.email = "El email es obligatorio"
        }          
              
        if(Object.keys(localError).length === 0){
            console.log('formulario validado')
            addToCart()
        }else{
            console.log('formulario con error')
            setError(localError)
        }
    }

    console.log(error)

    const addToCart = () => {
        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        const purchase = {
            buyer,
            items: cart,
            date: new Date(),
            total: total()
        }

        addDoc(orderCollection, purchase)
        .then(res => console.log(res.id))
        .catch(err => console.log(err))
    }

    if(totalQuantity() === 0){
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link className="btn btn-primary" to ="/">Productos</Link>
            </div>
        )
    }

    return (
        <>
            <div key="file-1">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Total</th>
                        </tr>
                    </thead>
                {
                cart.map((p, i) => (
                    <tbody>
                        <tr>
                            <th scope="row">{i+1}</th>
                            <td>{p.name}</td>
                            <td>{p.quantity}</td>
                            <td>{p.price}</td>
                            <td>{p.quantity * p.price}</td>
                        </tr>
                    </tbody> 
                ))
                }
                </table>                     
            </div>  
            <div key="file-2" className="row">
                <div className="col-md-6">
                    <button className="btn btn-warning" onClick={handleVaciar} >Vaciar Carrito</button>
                </div>   
                <div className="col-md-6 text-end">
                    <div className="total-carrito">
                        <h2>
                            Precio Total: ${total()}
                        </h2>
                    </div>                      
                </div>                                  
            </div>   

            <div key="file-3" className="">
                <CheckoutForm handleChange={handleChange} submit={submit} formData={buyer} error={error}/>
            </div>
        </>
       
    )
}

export default Cart