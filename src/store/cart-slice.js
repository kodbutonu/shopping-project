import { createSlice } from "@reduxjs/toolkit";

const cartDetails = createSlice({
    name: "cart",
    initialState: {
        items: [], // Sepetteki ürünler
        totalQuantity: 0, // Toplam ürün sayısı
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload; // Yeni eklenen ürün
            const existingItem = state.items.find(item => item.itemId === newItem.id); // Sepette bu ürün var mı kontrol et
            if (!existingItem) {
                // Eğer ürün sepette yoksa, sepete ekle
                state.items.push({ 
                    itemId: newItem.id, 
                    price: newItem.price, 
                    quantity: 1, 
                    name: newItem.title,
                    totalPrice: newItem.price // Toplam fiyat, ürünün ilk fiyatı
                });
            } else {
                // Eğer ürün zaten sepette varsa, miktarını arttır
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price; // Toplam fiyatı güncelle
            }
        },
        removeItemFromCart(state, action) { 
            const id = action.payload; // Çıkarılacak ürünün id'si
            const existingItem = state.items.find(item => item.itemId === id); // Ürünü bul
            if (existingItem.quantity === 1) {
                // Eğer ürünün miktarı 1 ise, tamamen çıkar
                state.items = state.items.filter(item => item.itemId !== id);
            } else {
                // Eğer ürünün miktarı 1'den fazla ise, miktarını azalt
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price; // Toplam fiyatı güncelle
            }
        }
    }
});

export default cartDetails.reducer;
export const cartActions = cartDetails.actions;
