import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./index.css";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Modal } from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { createItem } from "../../api/api";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(null);
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ message: "", color: "" });

  const { getValues, register, handleSubmit } = useForm();

  useEffect(() => {
    const products = sessionStorage.getItem("cart");
    if (products) {
      setCartProducts(JSON.parse(products));
    }
  }, []);

  const handleRemoveItem = (prod) => {
    const newCart = JSON.parse(sessionStorage.getItem("cart")).filter(
      (item) => item.id != prod.id
    );
    sessionStorage.setItem("cart", JSON.stringify(newCart));
    setCartProducts(newCart);
  };

  const createOrder = () => {
    console.log("Creando ordern");

    try {
      const values = getValues();

      const order = {
        email: values?.email,
        productos: JSON.parse(sessionStorage.getItem("cart")),
        date: new Date(),
      };
      createItem(order);
      setOpenOrderModal(false);
      setAlertMessage({ message: "Orden creada con exito", color: "green" });
    } catch (error) {
      setAlertMessage({ message: "Error al crear la orden", color: "red" });
    }
  };

  useEffect(() => {
    if (alertMessage.message) {
      setTimeout(() => {
        setAlertMessage({ message: "", color: "" });
      }, 2000);
    }
  }, [alertMessage]);

  return (
    <>
      <Modal open={openOrderModal}>
        <div className="orden_modal">
          <AiOutlineCloseCircle
            className="close_modal"
            size={20}
            cursor="pointer"
            onClick={() => setOpenOrderModal(false)}
          />
          <form onSubmit={handleSubmit(createOrder)}>
            <input {...register("email", { required: true })} />
            <button
              style={{ height: "fit-content", alignSelf: "flex-end" }}
              className="itemButton"
              type="submit"
            >
              <AiOutlineShoppingCart color="#fff" />
              <p className="buy_text">ORDER</p>
            </button>
          </form>
        </div>
      </Modal>
      <div>
        {alertMessage.message && (
          <div
            className="alert_container"
            style={{ backgroundColor: alertMessage.color }}
          >
            <p>{alertMessage.message}</p>
          </div>
        )}
        <Navbar />
        <div className="cartDiv">
          <p className="cartText">Carrito de compra</p>
          <div className="cart_products_list">
            {cartProducts?.map((prod) => (
              <div className="item_detail">
                <img className="item_image" src={prod.img}></img>
                <div className="item_text_detail">
                  <p>{prod.name}</p>
                  <p>{prod.price}</p>
                </div>
                <div className="remove_product_icon">
                  <BsTrash3
                    cursor="pointer"
                    size={30}
                    color={"#ce1212"}
                    onClick={() => {
                      handleRemoveItem(prod);
                    }}
                  />
                </div>
              </div>
            ))}
            <button
              style={{ height: "fit-content", alignSelf: "flex-end" }}
              className="itemButton"
              onClick={() => setOpenOrderModal(true)}
            >
              <AiOutlineShoppingCart color="#fff" />
              <p className="buy_text">ORDER</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
