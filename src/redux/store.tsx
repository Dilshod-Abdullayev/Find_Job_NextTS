import { configureStore } from "@reduxjs/toolkit";
import Product from "./action/Product";

const store = configureStore({
    reducer: {
        product: Product
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store