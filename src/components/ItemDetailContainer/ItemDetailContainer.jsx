import './ItemDetailContainer.css';
import {useState, useEffect} from 'react'
import {getProductById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { getDoc, doc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const {itemId} = useParams()

    useEffect (()=>{
        const db = getFirestore()
        const docRef = doc(db, "items", itemId)
        getDoc(docRef)
        .then((snapshot) => {
            setProduct( {id: snapshot.id, ...snapshot.data()})
        })
    }, [])

    return(
        <div>
           <ItemDetail {...product} ></ItemDetail>
        </div>
    )

}

export default ItemDetailContainer;
