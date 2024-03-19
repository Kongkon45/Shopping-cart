import React, { useState } from "react";
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";



const productsData = [
  {
    id: 1,
    name: "Laptop",
    image: '../public/images/laptop.webp',
    description: "Product 1 description",
    price: 10,
  },
  {
    id: 2,
    name: "Camera",
    image: '../public/images/camera.jpeg',
    description: "Product 2 description",
    price: 20,
  },
  {
    id: 3,
    name: "Mobile",
    image: '../public/images/mobile.jpeg',
    description: "Product 3 description",
    price: 30,
  },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = ({ id, name, price, quantity }) => {
    const existingItemIndex = cart.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { id, name, price, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productsData.map((product) => (
          <ProductItem
            key={product.id}
            {...product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Cart</h2>
      <div className="border rounded-lg">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onRemoveFromCart={removeFromCart}
          />
        ))}
      </div>
      <div className="mt-4 text-right">
        <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
