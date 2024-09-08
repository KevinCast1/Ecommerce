import './ItemDetail.css'

const ItemDetail = ({id, name, img, category, description, price, stock }) => {
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
        </div>
    )
}

export default ItemDetail;