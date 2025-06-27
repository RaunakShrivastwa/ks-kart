// src/redux/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';
import CryptoService from '../../EncryptionDecryption/CryptoService';


const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'professional', // Default theme
  },
  reducers: {
    toggleTheme(state, action) {
      state.mode = action.payload;
      console.log(`Theme changed to: ${state.mode}`);
      const encrypted = CryptoService.encrypt(state.mode);
      localStorage.setItem('theme', encrypted);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
