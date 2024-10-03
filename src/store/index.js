import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartDetails from "./cart-slice";

const store=configureStore({
    reducer:{
        ui:uiSlice.reducer,
        cart:cartDetails.reducer
    }
})

export default store;