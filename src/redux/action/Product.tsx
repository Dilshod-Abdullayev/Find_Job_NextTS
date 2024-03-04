import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { jobData } from "@/data/data";
type jobType = {
    id: number,
    img: string
    position: string,
    company: string,
    timeType: string,
    experiense: string,
    typeJob: string,
    techno: string[],
    location: string,
    salary: number,
    intern: boolean
}
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
            const isUnchecked = !state.check;
            if (isUnchecked) {
                return {
                    ...state,
                    value: jobData,
                };
            } else {
                const internJob = state.value.filter((job) => job.intern);
                return {
                    ...state,
                    value: internJob,
                };
            }
        },
    }
})
export const { internHandle } = Product.actions
// export const toggleAction = (state: RootState) => state.mode.value
export default Product.reducer 