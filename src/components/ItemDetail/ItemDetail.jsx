import './ItemDetail.css'
import {useContext, useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <div className="box-product-detail">

            <div className='img-product-detail' style={{ backgroundImage: `url(${img})` }}>
                
            </div>
            <div className='text-center'>
                <h3>{name}</h3>
                <p className='uppercase py-4'>{category}</p>
            </div>            
            <div>
                <p>{description}</p>
            </div>
            <div>
            <p>Costo: ${price}</p>
                <p>Stock en tienda: {stock}</p>
            </div>
            <div className='contadorItems'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='btn btn-success'>Ir al carrito</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail;