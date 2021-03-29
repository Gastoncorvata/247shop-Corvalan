import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList";
import { useParams } from "react-router-dom"; 
import  products  from '../../Products';

export default function ItemListContainer() {
const [items, setItems] = useState([])

const {categoryId} = useParams()


useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
        if (categoryId) {
            const productsFilter = products.filter((product) => {
                return product.category.toString() === categoryId;
            });
            resolve(productsFilter);
        } else resolve(products);
        resolve(products);
        }, 2000);
    });
    promesa.then((resultado) => {
        setItems(resultado);
    });
});


    return (

        <div className="container ">
        <h1 className="text-4xl capitalize font-medium px-12 my-4">   <spam className="text-4xl capitalize text-purple-500">{categoryId}</spam></h1>
            <ItemList items={items}/>
        </div>
    );
}
