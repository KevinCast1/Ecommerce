const CartItem = ({id, name, img, price, stock}) => {
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

export default CartItem;