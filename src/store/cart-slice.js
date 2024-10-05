import { createSlice } from '@reduxjs/toolkit';

const cartDetails = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Sepetteki ürünler
        totalQuantity: 0, // Toplam ürün sayısı
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.itemId === newItem.id);
            state.totalQuantity++; // Her eklemede toplam ürünü arttırıyoruz
            if (!existingItem) {
                state.items.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    name: newItem.title,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.itemId === id);
            state.totalQuantity--; // Ürün çıkarıldığında toplam sayıyı azaltıyoruz
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.itemId !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        }
    }
});

export const cartActions = cartDetails.actions;

export default cartDetails.reducer;
