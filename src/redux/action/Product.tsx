import { createSlice } from "@reduxjs/toolkit";
import { jobData, jobType } from "@/data/data"; // Adjust the path if necessary

interface ProductState {
    check: boolean,
    value: jobType[];
}

const initialState: ProductState = {
    check: true,
    value: jobData 
};

export const Product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        internHandle: (state) => {
            const updatedCheck = !state.check;
            if (updatedCheck) {
                return {
                    ...state,
                    check: updatedCheck,
                    value: jobData,
                };
            } else {
                const internJob = state.value.filter((job) => job.intern);
                return {
                    ...state,
                    check: updatedCheck,
                    value: internJob,
                };
            }
        },
    }
});

export const { internHandle } = Product.actions;
export default Product.reducer;