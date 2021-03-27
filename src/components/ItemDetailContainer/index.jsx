import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail'
import { useParams } from "react-router-dom";
import products from "../Products";


export default function ItemDetailContainer() {
    const [item, setItem] = useState([])
    
    const {itemId} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
        if (itemId) {
            const productsFilter = products.filter((product) => {
                return product.id.toString() === itemId;
            });
            resolve(productsFilter);
        } else resolve(products);
    });
    promesa.then((resultado) => {
        setItems(resultado);
    });

    return (<>
    <h2 className="text-4xl text-center text-amber-500"> Este es el Item {itemId}</h2>
        <ItemDetail item={item} /></>
    );
}