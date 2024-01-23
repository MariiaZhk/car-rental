import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCarsThunk, fetchCarsPerPageThunk } from "./operations";

const InitialState = {
  allCars: [],
  carsPerPage: [],
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

    setFilteredCars(state, { payload }) {
      state.filteredCars = payload;
    },
    setFilterDelete(state) {
      state.filter = null;
    },
  },

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
        const uniqueCars = payload.filter(
          (car) =>
            !state.carsPerPage.some((existingCar) => existingCar.id === car.id)
        );

        state.carsPerPage = [...state.carsPerPage, ...uniqueCars];
        state.error = null;
      })
      .addCase(fetchCarsPerPageThunk.rejected, onRejected);
  },
});

export const { setFilterAction, setFilteredCars, setFilterDelete } =
  carsSlice.actions;
export const carsReducer = carsSlice.reducer;
