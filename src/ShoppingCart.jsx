import React, { useState } from "react";
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";


const productsData = [
  {
    id: 1,
    name: "Laptop",
    image: "https://i.ibb.co/Wz7NJKP/laptop.webp",
    description: "Product 1 description",
    price: 10,
  },
  {
    id: 2,
    name: "Mobile",
    image: "https://i.ibb.co/L1BcGyQ/Apple-i-Phone-13.jpg",
    description: "Product 2 description",
    price: 20,
  },
  {
    id: 3,
    name: "Camera",
    image: "https://i.ibb.co/FhxsyLH/camera.jpg",
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

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  return (
    <div className="container flex gap-10 mx-auto p-4">
      <div className="w-2/3">
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
      </div>
      <div className="w-1/3">
      <h2 className="text-2xl font-semibold mt-8 mb-4">Cart</h2>
      <div className="border rounded-lg">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onRemoveFromCart={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        ))}
      </div>
      <div className="mt-4 text-right">
        <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
      </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
