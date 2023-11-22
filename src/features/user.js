import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { email: "", name: "", lastname: "", adresse: "" } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = { email: "", name: "", lastname: "", adresse: "" };
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
