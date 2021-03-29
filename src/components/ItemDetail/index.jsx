import React from 'react';
import {ItemCount} from "../ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail({ item }) {

    return (
        <div className = "wrapper w-3/5 justify-center text-center antialiased grid">
            <img src={item?.img} alt="" className="w-auto object-cover object-center rounded-lg shadow-md justify-center "/>
            <h2 className="relative px-4 text-800 px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">{item?.title}</h2>
            <h4 className="bg-teal-200 text-teal-800 px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">{item?.description}</h4>
            <div className="text-black font-extrabold text-lg">${item?.price}</div>
            <Link exact to="/">
            <button  Link exact to="/" className=" m-2 text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-500 font-bold uppercase px-8 py-1 rounded-full outline-none focus:outline-none mr-1 mb-1">
                <i className="fas fa-home" >  Home </i> 
            </button>
            </Link>
            <ItemCount stock={10} inicio={1}/>
        </div>
    );
}