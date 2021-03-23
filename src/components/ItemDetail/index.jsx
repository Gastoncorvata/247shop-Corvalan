import React from "react"

export default function ItemDetail({ item }) {

    return  
        <div>
            <img src={item?.foto} alt="" className="w-full object-cover object-center rounded-lg shadow-md"/>
            <h2 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{item?.titulo}</h2>
            <p className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">{item?.descripcion}</p>
            <div className="text-gray-600 text-sm">${item?.precio}</div>
        </div>
}