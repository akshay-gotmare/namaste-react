import React, { useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import { useSelector } from "react-redux";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);
  useEffect(() => {
    const sum = calculateTotal();
    setTotal(sum);
  }, []);
  const calculateTotal = () => {
    let sum = cartItems.reduce((acc, curr) => {
      return (acc += curr.card.info.price
        ? curr.card.info.price / 100
        : curr.card.info.defaultPrice / 100);
    }, 0);
    return sum;
  };

  console.log("Cart: ", cartItems);
  return (
    <div className="m-auto flex justify-center">
      <div className="text-center w-6/12">
        <p className="font-bold text-lg">Cart ({cartItems.length})</p>
        <MenuItems data={cartItems} />
      </div>
      <div className="w-3/12 m-5 bg-gray-100 rounded-md">
        <p className="font-bold text-lg text-center">Billing</p>
        <div>
          {cartItems.map((item) => {
            return (
              <div
                key={item.card.info.id}
                className="flex justify-between text-sm mx-5"
              >
                <p>{item.card.info.name}</p>
                <p>
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </p>
              </div>
            );
          })}
        </div>
        <div className="m-5 flex justify-between">
          <p className="font-bold">Total:</p>
          <p className="font-bold">₹{total}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
