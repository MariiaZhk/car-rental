import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCarsThunk, fetchCarsPerPageThunk } from "./operations";
import { getCarsMarks } from "../services/helpers";

const InitialState = {
  allCars: [],
  carsPerPage: [],
  carsMarks: [],
  isLoading: false,
  error: null,
  filter: null,
  filteredCars: [],
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

  reducers: {
    setFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
    // filterDelete(state, { payload }) {
    //   state.filter = null;
    // },
    setFilteredCars(state, { payload }) {
      state.filteredCars = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCarsThunk.pending, onPending)
      .addCase(fetchAllCarsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allCars = payload;
        state.carsMarks = getCarsMarks(payload);
        state.error = null;
      })
      .addCase(fetchAllCarsThunk.rejected, onRejected)

      .addCase(fetchCarsPerPageThunk.pending, onPending)
      .addCase(fetchCarsPerPageThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.carsPerPage = [...state.carsPerPage, ...payload];
        state.error = null;
      })
      .addCase(fetchCarsPerPageThunk.rejected, onRejected);
  },
});

export const { setFilterAction, setFilteredCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
