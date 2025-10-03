



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

let debounceTimer: ReturnType<typeof setTimeout> | null = null;


export const debouncedClearInput = createAsyncThunk(
  'movies/debouncedClearInput',
  async (_, { dispatch, getState }) => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const state = getState() as { movies: MoviesState };
      if (state.movies.inputValue.trim() === '') {
        dispatch(clearSearchTerm());
        dispatch(setInputValue(''));
      }
    }, 500);
  }
);

export interface Movie {
  id: string;
  primaryTitle: string;
  primaryImage?: { url: string };
  startYear?: number;
  rating?: { aggregateRating: number };
  plot?: string;
}

interface MoviesState {
  movies: Movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  searchTerm: string;
  inputValue: string;
  displayCount: number;
}

const initialState: MoviesState = {
  movies: [],
  status: 'idle',
  searchTerm: '',
  inputValue: '',
  displayCount: 10,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get('https://api.imdbapi.dev/titles');
  return response.data.titles as Movie[];
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload.trim();
    },
    clearSearchTerm(state) {
      state.searchTerm = '';
    },
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    increaseDisplayCount(state) {
      state.displayCount += 15;
    },
    resetDisplayCount(state) {
      state.displayCount = 10;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const {
  setSearchTerm,
  clearSearchTerm,
  setInputValue,
  increaseDisplayCount,
  resetDisplayCount,
} = moviesSlice.actions;

export default moviesSlice.reducer;
