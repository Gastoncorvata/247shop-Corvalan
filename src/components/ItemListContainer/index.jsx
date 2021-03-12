import React from "react";
import ItemCount from "../ItemCount"

export default function ItemListContainer() {
  return (
    <div className="container ">
      <ItemCount stock="9" inicio="0" />
    </div>
  );
}