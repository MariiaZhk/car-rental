import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: InitialState,

  reducers: {
    setFavoriteCar(state, { payload }) {
      state.favorites.push(payload);
    },
    deleteFavoriteCar(state, { payload }) {
      state.favorites = state.favorites.filter((car) => car.id !== payload);
    },
  },
});

export const { setFavoriteCar, deleteFavoriteCar } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
