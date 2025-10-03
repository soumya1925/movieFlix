

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface User {
  name: string;
  email: string;
  password: string;
  lastSearches: string[];
}

export interface AuthState {
  users: User[];
  currentUser: User | null;
}

const initialState: AuthState = {
  users: JSON.parse(localStorage.getItem('users') || '[]'),
  currentUser: JSON.parse(localStorage.getItem('currentUser') || 'null'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      const newUser = { ...action.payload, lastSearches: [] };
      state.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(state.users));

    },

    login: (state, action: PayloadAction<{ name: string; password: string }>) => {
      const user = state.users.find(
        u => u.name === action.payload.name && u.password === action.payload.password
      );
      state.currentUser = user || null;
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    },

    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem('currentUser');
    },

    updateLastSearches: (state, action: PayloadAction<string>) => {
      if (!state.currentUser) return;

      const term = action.payload.trim();
      if (!term) return;

   
      const updatedSearches = [
        term,
        ...state.currentUser.lastSearches.filter((s) => s !== term),
      ].slice(0, 5);

      state.currentUser.lastSearches = updatedSearches;

     
      const idx = state.users.findIndex(u => u.name === state.currentUser!.name);
      if (idx !== -1) {
        state.users[idx].lastSearches = updatedSearches;
      }

     
      localStorage.setItem('users', JSON.stringify(state.users));
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },
  },
});

export const { register, login, logout, updateLastSearches } = authSlice.actions;
export default authSlice.reducer;
