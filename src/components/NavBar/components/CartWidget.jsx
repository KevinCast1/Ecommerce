import './CartWidget.css';
import {useContext} from 'react';
import {CartContext} from '../../../context/CartContext';
import {Link} from 'react-router-dom'
 

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to='/cart' style={{display: totalQuantity() > 0 ? 'block' : 'none'}}>
            <div className='cart'>
                <img className='cart-img' src="/img/carrito-de-compras.png" alt="" />
                <span>{totalQuantity()}</span>
            </div>
        </Link>
    )
}

export default CartWidget


