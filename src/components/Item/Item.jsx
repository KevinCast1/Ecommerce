import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {
    return (
        <article>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <img src={img} alt={name} />
            </div>
            <div>
                <p>{price}</p>
                <p>{stock}</p>
            </div>
            <div>
                <Link to={`/item/${id}`}>Mas Info</Link>
            </div>
        </article>
    )
}

export default Item;