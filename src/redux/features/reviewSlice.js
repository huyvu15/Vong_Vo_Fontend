import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReviews: (state, { payload }) => {
      state.reviews = payload;
    },
  },
});

export const {setReviews} = reviewSlice.actions;
export default reviewSlice.reducer;
