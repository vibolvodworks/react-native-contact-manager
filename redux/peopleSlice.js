import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        people: [],
        loading: false
    },
    reducers: {
        getPeople: (state, action) => {
            state.people = action.payload,
            state.loading = false
        },
        patchPeople: (state, action) => {
            state.people = action.payload,
            state.loading = false
        }
    }
});

export const {getPeople, patchPeople} = peopleSlice.actions;

export default peopleSlice.reducer;