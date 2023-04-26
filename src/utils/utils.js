export const addProducts = (item) => {
  if (sessionStorage.getItem("cart")) {
    const productinCart = JSON.parse(sessionStorage.getItem("cart")).find(
      (prod) => prod.id === item.id
    );

    if (productinCart) {
      const newCart = [
        ...JSON.parse(sessionStorage.getItem("cart")).filter(
          (prod) => prod.id != item.id
        ),
        {
          ...item,
          cantidad:
            productinCart.cantidad + (item?.cantidad ? item.cantidad : 1),
        },
      ];

      sessionStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      const newCart = [
        ...JSON.parse(sessionStorage.getItem("cart")),
        { ...item, cantidad: item?.cantidad ? item.cantidad : 1 },
      ];
      sessionStorage.setItem("cart", JSON.stringify(newCart));
    }
  } else {
    sessionStorage.setItem("cart", JSON.stringify([{ ...item, cantidad: 1 }]));
  }
};
