import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../features/cart/cartSlice';
import { TrashIcon, HeartIcon } from '@heroicons/react/solid';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addItem({ ...item, quantity: 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(addItem({ ...item, quantity: -1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };

  return (
    <div className="flex flex-col md:flex-row items-start border-b py-4 space-y-4 md:space-y-0 md:space-x-4">
      {/* Gambar Item */}
      <div className="w-full md:w-1/4 bg-gray-300 p-4 rounded-lg">
        <img
          src={require(`../assets/${item.image}`)} 
          alt={item.name}
          className="w-full h-auto rounded-lg object-contain"
        />
      </div>

      {/* Deskripsi Item */}
      <div className="flex-1 px-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <div className="flex items-center justify-center border border-gray-300 rounded-lg">
            <button
              className="w-10 h-10 bg-gray-200 text-black hover:bg-gray-300 transition"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="px-4 text-lg font-semibold">{item.quantity}</span>
            <button
              className="w-10 h-10 bg-gray-200 text-black hover:bg-gray-300 transition"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>

        <p className="text-gray-500">{item.model} - {item.color}</p>
        <p className="text-gray-500">Color: {item.color}</p>
        <p className="text-gray-500">Size: {item.size}</p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <button
              className="flex items-center text-gray-500 hover:text-gray-700"
              onClick={handleRemove}
            >
              <TrashIcon className="w-5 h-5 mr-2" />
              Remove Item
            </button>
            <button className="flex items-center text-gray-500 hover:text-gray-700">
              <HeartIcon className="w-5 h-5 mr-2" />
              Move to Wishlist
            </button>
          </div>
          <p className="font-bold text-lg text-gray-800">
            {formatCurrency(item.price * item.quantity)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
