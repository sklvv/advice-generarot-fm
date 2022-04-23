import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const startAdvice = createAsyncThunk("card/startAdvice", async () => {
  const response = await axios.get("https://api.adviceslip.com/advice");
  const answer = response.data.slip;
  return answer;
});
export const refreshAdvice = createAsyncThunk(
  "card/refreshAdvice",
  async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const answer = response.data.slip;
    return answer;
  }
);
export const findAdvice = createAsyncThunk("card/findAdvice", async (id) => {
  const response = await axios.get("https://api.adviceslip.com/advice/" + id);
  const answer = response.data.slip;
  return answer;
});

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    id: "",
    title: "",
    loading: true,
    showModal: false,
    searchQuery: "",
  },
  reducers: {
    setId: (state, action) => {
      state.searchQuery = action.payload;
    },
    toggleModal(state) {
      state.showModal = !state.showModal;
      console.log(state.showModal);
    },
  },
  extraReducers: {
    [startAdvice.fulfilled]: (state, action) => {
      state.id = action.payload.id;
      state.title = action.payload.advice;
      state.loading = false;
    },
    [refreshAdvice.fulfilled]: (state, action) => {
      state.id = action.payload.id;
      state.title = action.payload.advice;
    },
    [findAdvice.fulfilled]: (state, action) => {
      state.showModal = false;
      state.id = action.payload.id;
      state.title = action.payload.advice;
    },
  },
});
export const { toggleModal, setId } = cardSlice.actions;
export default cardSlice.reducer;
