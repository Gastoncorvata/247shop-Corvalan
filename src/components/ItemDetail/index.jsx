import React from 'react';
import {ItemCount} from "../ItemCount";

export default function ItemDetail({ item }) {

    return (
        <div className = "wrapper w-3/5 justify-center text-center antialiased grid">
            <img src={item?.img} alt="" className="w-auto object-cover object-center rounded-lg shadow-md justify-center "/>
            <h2 className="relative px-4 text-800 px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">{item?.title}</h2>
            <h4 className="bg-teal-200 text-teal-800 px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">{item?.description}</h4>
            <div className="text-black font-extrabold text-lg">${item?.price}</div>
            <ItemCount stock={10} inicio={1}/>
        </div>
    );
}