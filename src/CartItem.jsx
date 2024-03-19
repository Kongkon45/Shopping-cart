import React from "react";

const CartItem = ({ id, name, price, quantity, onRemoveFromCart }) => {
  return (
    <div className="flex justify-between items-center border-b-2 py-2">
      <div className="flex">
        <p className="font-semibold mr-20">{name}</p>
        <p className="text-gray-600">${price} x {quantity}</p>
      </div>
      <button
        className="text-red-500 hover:text-red-600 focus:outline-none"
        onClick={() => onRemoveFromCart(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
