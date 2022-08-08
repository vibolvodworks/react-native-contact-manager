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
        }
    }
});

export const {getPeople} = peopleSlice.actions;

export default peopleSlice.reducer;