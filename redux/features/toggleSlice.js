import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = { showContactModal: false, showQuoteModal: false };

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleContactModal(state, action) {
      state.showContactModal = !state.showContactModal;
    },
    toggleQuoteModal(state, action) {
      state.showQuoteModal = !state.showQuoteModal;
    },
  },
});

export const { toggleContactModal, toggleQuoteModal } = toggleSlice.actions;
export default toggleSlice.reducer;
