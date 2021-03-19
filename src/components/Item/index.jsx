import React from "react"
import {ItemCount} from "../ItemCount"
export const Item= ({ item }) => {

    return(
    <div className = "wrapper bg-gray-100 antialiased text-gray-900">
        <div className="m-4">
            <img src= {item.foto} alt="Item" className="w-full object-cover object-center rounded-lg shadow-md"/>
            <div className="relative px-4 -mt-16  ">
                <div className="bg-purple-200 p-6 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                        <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                            Nuevo
                        </span>
                        <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                            {item.marca}  &bull; {item.descripcion}
                        </div>
                    </div>
                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                        {item.titulo}
                    </h4>
                    <div className="mt-1">
                        {item.precio}
                        <span className="text-gray-600 text-sm">
                            $
                        </span>
                    </div>
                    <div className="mt-4">
                        <span className="text-teal-600 text-md font-semibold">
                            {item.estrellas} estrellas   
                        </span>
                        <span className="text-sm text-gray-600">
                                (basado en {item.ranking} valoraciones)
                        </span>
                    </div>  
                </div>
            </div>
        </div>
        <ItemCount stock={item.stock} inicio={1} />
    </div>
    )
}