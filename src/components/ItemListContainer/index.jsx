import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList";
import { useParams } from "react-router-dom"; 

export default function ItemListContainer() {
const [items, setItems] = useState([])

const {categoryId} = useParams()

useEffect(()=>{

    const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([
        { id:1, title:"Milka", marca: "Milka", price:180, stock:5, description: "Blanco", ranking: "234", estrellas: "4/5", img:"https://i1.wp.com/kdg.com.ar/wp-content/uploads/2020/10/Milka-grande.png?fit=300%2C300" },
        { id:2, title:"Rhodesia", marca:"Terrabusi", price:55, stock:7, description: "Negro", ranking: "674", estrellas: "3/5", img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/150/512/products/1221-a1fb662d01f9742a2e15937565338804-640-0.png" },
        { id:3, title:"Papas Fritas", marca: "Lays", price:180, stock:20, description: "150 gr", ranking: "234", estrellas: "4/5", img:"https://e7.pngegg.com/pngimages/309/626/png-clipart-lay-s-potato-chip-frito-lay-flavor-grocery-store-potato.png" },
        { id:4, title:"Nachos", marca: "Chips", price:180, stock:5, description: "El sabor", ranking: "234", estrellas: "4/5", img:"https://www.pikpng.com/pngl/m/116-1164261_el-sabor-nacho-chips-salted-100-gm-nachos.png" },
        { id:5, title:"Coca", marca: "Coca", price:180, stock:5, description: "Lata 300cc", ranking: "234", estrellas: "4/5", img:"https://img2.freepng.es/20180927/ju/kisspng-coca-cola-car-product-design-5baca128a41f25.6167852015380401046723.jpg" },
        { id:6, title:"Sprite", marca: "Sprite", price:180, stock:5, description: "Lata 300cc", ranking: "234", estrellas: "4/5", img:"https://img2.freepng.es/20180618/gay/kisspng-sprite-zero-fizzy-drinks-lemon-lime-drink-diet-cok-sprite-can-5b273e172ae001.6171247915292984551756.jpg" },

        ])
    },2000)
    })

    promesa.then((resultado)=>{
        setItems(resultado)
        })
    })

    return (

        <div className="container ">
        <h1 className="text-4xl capitalize text-amber-500 font-medium px-12 my-4">  ESTA CATEGORIA PERTENECE A LOS ITEMS DE <spam className="text-4xl capitalize text-purple-500">{categoryId}</spam></h1>
            <ItemList items={items}/>
        </div>
    );
}