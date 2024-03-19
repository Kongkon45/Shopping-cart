import React, { useState } from "react";

const ProductItem = ({ id, name, image, description, price, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border p-4">
      <img src={image} alt={name} className="h-25 w-full object-cover" />
      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <p className="mt-2 font-bold">${price}</p>
        {/* <div className="flex items-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-l focus:outline-none focus:shadow-outline"
            onClick={decrementQuantity}
          >
            -
          </button>
          <input
            type="text"
            className="border-t border-b border-blue-500 text-center py-1 px-2 w-16"
            value={quantity}
            readOnly
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-r focus:outline-none focus:shadow-outline"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div> */}
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => onAddToCart({ id, name, price, quantity })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
