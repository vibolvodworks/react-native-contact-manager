import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        people: [],
        filterPeople: [],
        searchTerm: "",
        loading: false
    },
    reducers: {
        getPeople: (state, action) => {
            state.people = action.payload,
            state.filterPeople = action.payload,
            state.loading = false
        },
        filterPeople: (state, action) => {
            state.filterPeople = action.payload.people,
            state.searchTerm = action.payload.searchTerm
            state.loading = false
        },
        patchPeople: (state, action) => {
            state.people = action.payload,
            state.loading = false
        }
    }
});

export const {getPeople, patchPeople, filterPeople} = peopleSlice.actions;

export default peopleSlice.reducer;