import React, {useState, useEffect} from "react"
import ItemDetalil from "../ItemDetail"

const getItem = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve({
            titulo:"Producto",
            precio: 144,
            descripcion: "Un producto seleccionado con los mas altos estandares de calidad",
            img:""
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