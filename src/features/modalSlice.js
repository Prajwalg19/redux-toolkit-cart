import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "ModalSlice",
    initialState: {
        isOpen: false,
    },
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
    },
});

const { actions } = modalSlice;
export const modalActions = actions;
export default modalSlice.reducer;
