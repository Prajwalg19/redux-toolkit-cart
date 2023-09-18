import { configureStore } from "@reduxjs/toolkit";
import firstSlice from "./features/firstSlice";
import modalSlice from "./features/modalSlice";
export const store = configureStore({
    reducer: {
        first: firstSlice,
        modal: modalSlice,
    },
});
