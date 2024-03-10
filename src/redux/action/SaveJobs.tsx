import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    intern: boolean,

}
interface ProductState {
    value: jobType[];
}
const initialState: ProductState = {
    value: []
};
export const SaveJobs = createSlice({
    name: "savejob",
    initialState,
    reducers: {
        saveJob: (state, action: PayloadAction<jobType>) => {
            const isJobSaved = state.value.some(job => job.id === action.payload.id);
            if (!isJobSaved) {
                state.value.push(action.payload);
            }
        },
    }
})
export const { saveJob } = SaveJobs.actions

export default SaveJobs.reducer 