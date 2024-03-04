import { createSlice } from "@reduxjs/toolkit";
import { jobData } from "@/data/data";

type ProductState = {
    selectedCategories: string[];
};
const initialState: ProductState = {
    selectedCategories: ['contract', 'fulltime', 'partTime', 'kelishuv'],
};
export const CheckAction = createSlice({
    name: 'checkaction',
    initialState,
    reducers: {

    }
})
// export const { internHandle } = Product.actions
// export const toggleAction = (state: RootState) => state.mode.value
export default CheckAction.reducer 