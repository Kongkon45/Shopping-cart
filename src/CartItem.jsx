import React, { useState } from "react";

const CartItem = ({ id, name, price, quantity, onRemoveFromCart, onUpdateQuantity }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const incrementQuantity = () => {
    setItemQuantity(itemQuantity + 1);
    onUpdateQuantity(id, itemQuantity + 1);
  };

  const decrementQuantity = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
      onUpdateQuantity(id, itemQuantity - 1);
    }
  };

  return (
    <div className="flex justify-between items-center border-b-2 py-2">
      <div>
        <p className="font-semibold">{name}</p>
        {/* <p className="text-gray-600">${price} x {itemQuantity}</p> */}
      </div>
      <div className="flex items-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-l focus:outline-none focus:shadow-outline"
          onClick={decrementQuantity}
        >
          -
        </button>
        <input
          type="text"
          className="border-t border-b border-blue-500 text-center py-1 px-2 w-16"
          value={itemQuantity}
          readOnly
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-r focus:outline-none focus:shadow-outline"
          onClick={incrementQuantity}
        >
          +
        </button>
      </div>
      <button
        className="text-red-500 hover:text-red-600 focus:outline-none"
        onClick={() => onRemoveFromCart(id)}
      >
        Remove
      </button>
      <div>
      <p className="text-gray-600">${price} x {itemQuantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
