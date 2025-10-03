import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import type { RootState, AppDispatch } from '../store';
import { fetchMovies, increaseDisplayCount } from '../store/moviesSlice';
import { logout } from '../store/authSlice';

import SearchBar from '../components/SearchBar';

const LandingPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const movies = useSelector((state: RootState) => state.movies.movies);
  const status = useSelector((state: RootState) => state.movies.status);
  const searchTerm = useSelector((state: RootState) => state.movies.searchTerm);
  const displayCount = useSelector((state: RootState) => state.movies.displayCount);
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [dispatch, status]);

  const loadMore = () => dispatch(increaseDisplayCount());

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const displayedMovies = searchTerm
    ? movies.filter(movie =>
        movie.primaryTitle.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : movies;

  return (
    <Box sx={{ padding: 2, width: '100%', boxSizing: 'border-box', overflowX: 'hidden' }}>
      
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'center' },
          textAlign: { xs: 'center', sm: 'left' },
          gap: 2,
          mb: 4,
          px: 1
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#1976d2',
            fontFamily: '"Netflix Sans", "Arial", sans-serif',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
          }}
        >
          Top Movies
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            width: { xs: '100%', sm: 'auto' },
            justifyContent: { xs: 'center', sm: 'flex-end' }
          }}
        >
          {currentUser && <AccountCircle fontSize="large" color="primary" />}
          <Button variant="outlined" color="error" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Box>

      {/* Search Bar Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
          <SearchBar />
        </Box>
      </Box>

      {/* Movie Cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: 3,
          justifyContent: 'center',
        }}
      >
        {displayedMovies.slice(0, displayCount).map((movie) => (
          <Card
            key={movie.id}
            sx={{ width: 250, flex: '1 1 250px', cursor: 'pointer', boxSizing: 'border-box' }}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            {movie.primaryImage?.url && (
              <CardMedia
                component="img"
                height="350"
                image={movie.primaryImage.url}
                alt={movie.primaryTitle}
              />
            )}
            <CardContent>
              <Typography variant="h6">{movie.primaryTitle}</Typography>
              <Typography variant="body2" color="text.secondary">
                Year: {movie.startYear || 'N/A'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {movie.rating?.aggregateRating || 'N/A'}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {movie.plot?.slice(0, 60)}...
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Load More Button */}
      {displayCount < displayedMovies.length && (
        <Box textAlign="center" sx={{ marginTop: 4 }}>
          <Button variant="contained" onClick={loadMore}>
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default LandingPage;
