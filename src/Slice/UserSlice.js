import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : null,
  loading: false,
  sideBar:false
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserData: (state, value) => {
      state.userData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setSideBar(state, value) {
      state.sideBar = value.payload;
    }
  },
});

export const { setUserData, setLoading,setSideBar } = userSlice.actions;

export default userSlice.reducer;
