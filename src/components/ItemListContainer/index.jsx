import React from "react";
import ItemCount from "../ItemCount"

export default function ItemListContainer({greeting}) {
  return (
    <div className="container ">
      <h1 className="text-center text-purple-500 italic">{greeting} a la lista de items!</h1>
      <ItemCount stock="5" inicio="1" />
    </div>
  );
}