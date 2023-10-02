import { configureStore } from "@reduxjs/toolkit";
import firstReducer from "./features/firstSlice";
import modalReducer from "./features/modalSlice";
export const store = configureStore({
    reducer: {
        first: firstReducer,
        modal: modalReducer,
    },
});
