import { createSlice } from "@reduxjs/toolkit";

const netInfoSlice = createSlice({
  name: "netInfo",
  initialState: {
    connected: false,
  },
  reducers: {
    updateNetConnection: (state, action) => {
      state.connected = action?.payload;
    },
  },
});

export const { updateNetConnection } = netInfoSlice.actions;
export default netInfoSlice.reducer;
