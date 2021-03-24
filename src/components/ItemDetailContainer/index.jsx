import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail'


const getItems = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve({
            title:"Producto Artesanal",
            price: 199.99,
            description: "Chocolate de la mejor calidad 100% cacao ",
            img:"http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c0d1.png"

        })},2000)
    })
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    useEffect(() => {
        getItems().then((res)=> setItem(res))
        return;
    }, [])

    
    return <ItemDetail item={item} />
    }

