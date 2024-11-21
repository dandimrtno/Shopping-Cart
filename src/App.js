import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './components/CartItem';
import CartSummary from './components/CartSummary';
import PromoCodeInput from './components/PromoCodeInput';

const App = () => {
  const items = useSelector(state => state.cart.items);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 ">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white shadow-custom p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Cart ({items.length} items)
          </h2>
          {items.length > 0 ? (
            items.map(item => <CartItem key={item.id} item={item} />)
          ) : (
            <p className="text-gray-500">Keranjang kosong.</p>
          )}
        </div>
        <div className="container">
          <CartSummary />
          <PromoCodeInput />
        </div>
      </div>
    </div>
  );
};

export default App;
