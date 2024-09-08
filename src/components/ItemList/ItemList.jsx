import './ItemList.css';
import Item from '../Item/Item'

// ====== Aqui se listan los productos ====== //

const ItemList = ({products}) => {
    return(
        <div className='grid grid-cols-3 gap-8 text-center'>
            {products.map(prod => <Item key={prod.id} {...prod} /> )}
        </div>
    )
}

export default ItemList