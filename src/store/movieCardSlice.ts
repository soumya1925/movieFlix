
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';

export interface Person {
  id: string;
  displayName: string;
  primaryImage?: { url: string };
  primaryProfessions?: string[];
}

export interface Movie {
  id: string;
  type: string;
  primaryTitle: string;
  originalTitle: string;
  primaryImage?: { url: string };
  startYear?: number;
  runtimeSeconds?: number;
  genres?: string[];
  rating?: { aggregateRating: number; voteCount: number };
  plot?: string;
  directors?: Person[];
  writers?: Person[];
  stars?: Person[];
  originCountries?: { code: string; name: string }[];
  spokenLanguages?: { code: string; name: string }[];
  interests?: { name: string }[];
}

interface MovieState {
  currentMovie: Movie | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MovieState = {
  currentMovie: null,
  status: 'idle',
};


export const fetchMovieById = createAsyncThunk(
  'movie/fetchMovieById',
  async (id: string) => {
    const response = await axios.get(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.imdbapi.dev/titles/${id}`)}`
    );
    return response.data as Movie;
  }
);

const movieCardSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    clearMovie: (state) => {
      state.currentMovie = null;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieById.fulfilled, (state, action: PayloadAction<Movie>) => {
        state.currentMovie = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchMovieById.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { clearMovie } = movieCardSlice.actions;
export default movieCardSlice.reducer;




