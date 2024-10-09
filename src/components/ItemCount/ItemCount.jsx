import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }
    }    

    return(
        <div className="Counter">
            <div className="controls">
                <button className="btn btn-warning" onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button className="btn btn-primary" onClick={increment}>+</button>
            </div>
            <div>
                <button className="btn btn-success" onClick={() => onAdd(quantity)} disabled={!stock}>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount