import React from 'react';
import { useSelector } from 'react-redux';

const CartSummary = () => {
  const { totalPrice, shippingCost } = useSelector((state) => state.cart);

  const handleCheckout = () => {
    alert("Pesanan telah diproses");
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };

  return (
    <div className="lg:col-span-2 bg-white shadow-custom p-4 rounded-lg space-y-4">
      <h2 className="text-xl font-bold mb-4">The total amount of</h2>
      <div className="flex justify-between mb-2">
        <p>Temporary amount</p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>Shipping</p>
        <p>{shippingCost}</p>
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="flex justify-between font-bold text-lg">
        <p>Total</p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <button
        onClick={handleCheckout}
        className="w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
