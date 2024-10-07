import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLaunches = createAsyncThunk(
  "rockets/fetchLaunches",
  async () => {
    const response = await axios.get("https://api.spacexdata.com/v5/launches");
    return response.data;
  }
);

const launchesSlice = createSlice({
  name: "launches",
  initialState: {
    launches: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLaunches.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLaunches.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.launches = action.payload;
      })
      .addCase(fetchLaunches.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default launchesSlice.reducer;
