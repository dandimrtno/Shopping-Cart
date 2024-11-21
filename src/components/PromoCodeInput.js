import React, { useState } from 'react';

const PromoCodeInput = () => {
  const [promoVisible, setPromoVisible] = useState(false);
  const [promoCode, setPromoCode] = useState('');

  const togglePromo = () => {
    setPromoVisible(!promoVisible);
  };

  const handleApplyPromo = () => {
    alert(`Kode promo "${promoCode}" diterapkan.`);
  };

  return (
    <div className="lg:col-span-2 bg-white shadow-custom p-4 rounded-lg mt-4">
      <button
        onClick={togglePromo}
        className="w-full flex justify-between items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-300 transition"
      >
        <span className="text-left">Add a discount code [optional]</span>
        <span className="text-right">{promoVisible ? '▲' : '▼'}</span>
      </button>
      {promoVisible && (
        <div className="mt-4">
          <label htmlFor="promo-code" className="block text-gray-700 mb-2">
            Masukkan Kode Promo:
          </label>
          <div className="flex">
            <input
              id="promo-code"
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contoh: DISKON50"
            />
            <button
              onClick={handleApplyPromo}
              className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 transition"
            >
              Terapkan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromoCodeInput;
