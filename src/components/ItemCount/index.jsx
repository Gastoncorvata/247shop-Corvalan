import React, {useState} from "react";

export function ItemCount ({stock, inicio, onAdd}){
    const [count, setCount] = useState (inicio);

    const agregar = () => {
        setCount (count +1);
    };

    const restar = () => {
        setCount (count -1);
    };

    return (
        <div className="flex flex-col items-center justify-center ">
        <div className="m-2 p-2 flex items-center justify-center border rounded max-w-xs h-40">
            
            <button 
            disabled={count <= 0}
            onClick={restar}
            className="text-red-500 bg-transparent  hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
            type="button" 
            style={{ transition: "all .15s ease" }}>
                <i className="far fa-minus-square"></i> 
            </button>

            <div className= "m-5 px-8 font-black ">{count}</div>

            <button 
            disabled={count >= stock}
            onClick={agregar}
            className="text-green-500 bg-transparent  hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
            type="button" 
            style={{ transition: "all .15s ease" }}>
                <i className="far fa-plus-square"></i> 
            </button>
        </div>
            <button 
            disabled={count >= 1}
            onClick= {onAdd}
            className=" m-2 text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-600 font-bold uppercase px-8 py-1 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button" 
            style={{ transition: "all .15s ease" }}>
                <i className="fas fa-shopping-cart"> Agregar</i> 
            </button>
        </div>
    );
}

export default ItemCount;