import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type ProductState = {
    selectedCategories: string[];
    intern: boolean
};
const initialState: ProductState = {
    selectedCategories: ['contract', 'fulltime', 'partTime', 'kelishuv'],
    intern: false
};
export const CheckAction = createSlice({
    name: 'checkaction',
    initialState,
    reducers: {
        toggleCategory: (state, action: PayloadAction<string>) => {
            const category = action.payload;
            const index = state.selectedCategories.indexOf(category);
            if (index === -1) {
                state.selectedCategories.push(category);
            } else {
                state.selectedCategories.splice(index, 1);
            }
        },
        toggleIntern: (state: ProductState) => {
            state.intern = !state.intern
            state.selectedCategories = ['contract', 'fulltime', 'partTime', 'kelishuv']

        }
    }
});

export default CheckAction.reducer
export const { toggleCategory, toggleIntern } = CheckAction.actions