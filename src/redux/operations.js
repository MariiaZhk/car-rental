import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65aa7717081bd82e1d9704f3.mockapi.io";

export const PerPage = 12;

export const fetchAllCarsThunk = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/adverts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarsPerPageThunk = createAsyncThunk(
  "cars/fetchPerPage",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(
        `/adverts?page=${page}&limit=${PerPage}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
