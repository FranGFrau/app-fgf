import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  return (
    <div className="itemList">
      <ItemCount stock={6} initial={1} />
    </div>
  );
};

export default ItemListContainer;
