import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./CardDetail.css";
import { doc, getDoc } from "firebase/firestore";
import db from "../../../db/firebase-config";
import Count from "../Count";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addProducts } from "../../utils/utils";
const CardDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [count, setCount] = useState(1);

  const getItems = async () => {
    const itemDoc = doc(db, "products", id);
    const item = await getDoc(itemDoc);

    if (item.exists()) {
      setItem(item.data());
    } else {
      console.log("No such Document");
    }
  };

  const handleAddToCart = () => {
    addProducts({ ...item, cantidad: count, id: id });
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="boxDetail ">
        <div className="divDetail">
          <div className="divImg">
            <img
              className="imgDetail"
              src={item.img}
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="divText">
            <h2 className="textDetail">{item.name}</h2>
            <p className="priceDetail">{item.price}</p>
            <p>
              {}
              <Count count={count} setCount={setCount} />
            </p>
            <button
              style={{ height: "fit-content", width: "fit-content" }}
              className="itemButton"
              type="submit"
              onClick={handleAddToCart}
            >
              <AiOutlineShoppingCart color="#fff" />
              <p className="buy_text">ADD</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;