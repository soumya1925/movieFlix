import { Box, TextField, Button, Chip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import {
    setSearchTerm,
    setInputValue,
    debouncedClearInput, 
  } from '../store/moviesSlice';
import { updateLastSearches } from '../store/authSlice';

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { inputValue, searchTerm } = useSelector((state: RootState) => state.movies);
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);


  const handleInputChange = (value: string) => {
    dispatch(setInputValue(value));
    if (value.trim() === '') {
      dispatch(debouncedClearInput());
    }
  };


  const handleSearch = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      dispatch(debouncedClearInput());
      return;
    }
    dispatch(setSearchTerm(trimmed));
    if (currentUser) {
      dispatch(updateLastSearches(trimmed));
    }
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          label="Search Movies"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>

      {currentUser && currentUser.lastSearches.length > 0 && (
        <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {currentUser.lastSearches.map((term, idx) => (
            <Chip
              key={idx}
              label={term}
              onClick={() => {
                dispatch(setInputValue(term));
                dispatch(setSearchTerm(term));
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
