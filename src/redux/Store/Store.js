// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../Slice/ThemeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
