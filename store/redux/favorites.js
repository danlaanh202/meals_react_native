import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavoriteMeal: (state, action) => {
      state.ids.push(action.payload);
    },
    removeFavoriteMeal: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload), 1);
    },
  },
});

export default favoritesSlice.reducer;

export const { addFavoriteMeal, removeFavoriteMeal } = favoritesSlice.actions;
