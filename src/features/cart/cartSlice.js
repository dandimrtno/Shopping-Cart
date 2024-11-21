import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: 'Uniqlo',
      code: 'K001',
      model:'Shirt',
      color: 'Black',
      size: 'L',
      price: 100000,
      quantity: 1,
      image: 'kaos1.png',
    },
    {
      id: 2,
      name: 'H&M',
      code: 'K002',
      model:'Shirt',
      color: 'Blue',
      size: 'M',
      price: 120000,
      quantity: 1,
      image: 'kaos2.png',
    },
  ],
  totalQuantity: 2,
  totalPrice: 220000,
  shippingCost: 'Free',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload
      );
      const item = state.items[itemIndex];
      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.price * item.quantity;
      state.items.splice(itemIndex, 1);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
