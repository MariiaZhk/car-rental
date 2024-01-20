import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCarsThunk, fetchCarsPerPageThunk } from "./operations";

const InitialState = {
  allCars: [],
  carsPerPage: [],
  isLoading: false,
  error: null,
};

const onPending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: InitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCarsThunk.pending, onPending)
      .addCase(fetchAllCarsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allCars = payload;
        state.error = null;
      })
      .addCase(fetchAllCarsThunk.rejected, onRejected)
      .addCase(fetchCarsPerPageThunk.pending, onPending)
      .addCase(fetchCarsPerPageThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.carsPerPage = [...state.cars, ...payload];
        state.error = null;
      })
      .addCase(fetchCarsPerPageThunk.rejected, onRejected);
  },
});

export const carsReducer = carsSlice.reducer;
