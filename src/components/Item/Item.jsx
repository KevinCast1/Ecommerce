import './Item.css';
import { Link } from 'react-router-dom';

// ====== Aqui se crea el formato del componente que se listara en el ItemList.jsx ====== //

const Item = ({id, name, img, price, stock}) => {
    return (
        <article className='box-product'>
            <div className='img-product' style={{ backgroundImage: `url(${img})` }}>
                
            </div>
            <div >
                <h2 className='text-lg font-bold'>{name}</h2>
            </div>            
            <div className='py-4'>
                <p>${price}</p>
                <p>Stock: {stock}</p>
            </div>
            <div>
                <Link className='hover:bg-sky-700 px-4 py-2 font-bold text-sm bg-cyan-500 text-white rounded-full shadow-sm' to={`/item/${id}`}>Mas Info</Link>
            </div>
        </article>
    )
}

export default Item;