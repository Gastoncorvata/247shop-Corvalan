import React, { useEffect, useState } from "react";
import {ItemList} from "../ItemList"


export default function ItemListContainer() {
const [items, setItems] = useState([])

useEffect(()=>{

    const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([
        { id:1, titulo:"Milka", marca: "Milka", precio:180, stock:5, descripcion: "Blanco", ranking: "234", estrellas: "4/5", foto:"https://i1.wp.com/kdg.com.ar/wp-content/uploads/2020/10/Milka-grande.png?fit=300%2C300" },
        { id:2, titulo:"Block", marca: "Block", precio:520, stock:6, descripcion: "Con Mani", ranking: "114", estrellas: "5/5", foto:"https://esdemipais.com/wp-content/uploads/2020/11/CoflerBlockCajaDe20-5.png"},
        { id:3, titulo:"Rhodesia", marca:"Terrabusi", precio:55, stock:7, descripcion: "Negro", ranking: "674", estrellas: "3/5", foto:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/150/512/products/1221-a1fb662d01f9742a2e15937565338804-640-0.png" }
        ])
    },2000)
    })

    promesa.then((resultado)=>{
        setItems(resultado)
        })

    })

    return (
        <div className="container ">
            <ItemList items={items}/>
        </div>
    );
}