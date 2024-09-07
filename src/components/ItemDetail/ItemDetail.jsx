import {Link, useParams} from "react-router-dom";
// utilizamos useParams para obtener los datos que enviamos por el dom
import productos from "../data.js"

function ItemDetail(){

   const {productoId} = useParams();

//    Utilizamos find para buscar en un arreglo un elemento en este caso buscamos segunel id dentro del arreglo comparando si llega por productoId el cual es recibido desde el dom y comparado con el resutlado de find
   const resultadoFind = productos.find((producto) => producto.id == productoId );

    const {image, title, price} = resultadoFind; 

    

    return (
        <>
            <div>
                <h2>Pagina detalle producto: {productoId}</h2>
                <Link to="/productos">Volver</Link>
            </div>
            <div>
                <img src={image} alt="" />
                <h2>{title}</h2>
                <h3>{price}</h3>
            </div>        
        </>

    )
}

export default ItemDetail;