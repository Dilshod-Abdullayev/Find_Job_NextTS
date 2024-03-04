import { configureStore } from "@reduxjs/toolkit";
import Product from "./action/Product";
import CheckAction from "./action/CheckAction";
const store = configureStore({
    reducer: {
        product: Product,
        checkaction: CheckAction
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store