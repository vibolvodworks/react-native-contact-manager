import { configureStore } from "@reduxjs/toolkit";
import peopleSlice from "./peopleSlice";

export const store = configureStore({
    reducer: {
        peopleReducer: peopleSlice
    }
});