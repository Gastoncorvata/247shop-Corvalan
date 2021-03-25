import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail'
import { useParams } from "react-router-dom";

const getItems = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve({
            title:"Producto Artesanal",
            price: 199.99,
            description: " Este Item esta etiquetado como Item:" + id,
            img:"https://keshetcacao.com/wp-content/uploads/2019/11/taza.png",

        })},2000)
    })
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    
    const {itemId} = useParams()

    useEffect(() => {
        getItems(itemId).then((res)=> setItem(res))
        return;
    }, [itemId])

    
    return <>
    <h2 className="text-4xl text-center text-amber-500"> Este es el Item {itemId}</h2>
        <ItemDetail item={item} /></>
    }

