import { useState, useEffect } from 'react' 
import ItemList from '../ItemList/ItemList' 
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where, getFirestore } from 'firebase/firestore'


const ItemsListContainer = ({greeting}) => { 
    
    const [products, setProducts] = useState([]) 
    const [loading, setLoading] = useState(true) 

    const {categoryId} = useParams()
    
    
    useEffect (()=>{
        const db = getFirestore()
        setLoading(true)
        const itemsCollection = categoryId
            ? query(collection(db, "items"), where('category', '==', categoryId))
            : collection(db, 'items')
        getDocs(itemsCollection)
            .then((response) => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error =>{
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemsListContainer