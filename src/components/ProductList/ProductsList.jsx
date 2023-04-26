

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addProducts } from "../../utils/utils";
const ProductsList = ({ item, deleteItems }) => {
  return (
    <div className="itemBox" key={item.id}>
      <Link to={`${item.id}`} className="boxItems">
        <div className="itemText">
          <h2 className="itemsName">{item.name}</h2>
          <img src={item.img} alt="" className="itemsImg" />
          <h4 className="itemPrice">{item.price}</h4>
        </div>
      </Link>
      <button className="itemButton" onClick={() => addProducts(item)}>
        <AiOutlineShoppingCart color="#fff" />
        <p className="buy_text">BUY</p>
      </button>
    </div>
  );
};

export default ProductsList;

