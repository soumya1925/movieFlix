import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Card, CardMedia, CardContent, Typography, Button, Chip, Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { fetchMovieById, clearMovie } from '../store/movieCardSlice';

const MovieCard = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const movie = useSelector((state: RootState) => state.movie.currentMovie);
  const status = useSelector((state: RootState) => state.movie.status);

  useEffect(() => {
    if (id) dispatch(fetchMovieById(id));

    return () => {
      dispatch(clearMovie());
    };
  }, [dispatch, id]);

  if (status === 'loading') return <Typography>Loading...</Typography>;
  if (!movie) return <Typography>No movie found.</Typography>;

  return (
    <Box sx={{ padding: 2, maxWidth: 1000, margin: '0 auto' }}>
      <Button variant="outlined" onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        Back
      </Button>

      <Card>
        {movie.primaryImage?.url && (
      <CardMedia
      component="img"
      image={movie.primaryImage.url}
      alt={movie.primaryTitle}
      sx={{
        width: '100%',
        height: 400,         
        objectFit: 'cover',
      }}
    />
        )}
        <CardContent>
          <Typography variant="h4">{movie.primaryTitle}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Original Title: {movie.originalTitle}
          </Typography>
          <Typography>Year: {movie.startYear}</Typography>
          <Typography>
            Runtime: {movie.runtimeSeconds ? `${Math.floor(movie.runtimeSeconds / 60)} min` : 'N/A'}
          </Typography>
          <Typography>Genres: {movie.genres?.join(', ')}</Typography>
          <Typography>
            Rating: {movie.rating?.aggregateRating || 'N/A'} ({movie.rating?.voteCount || 0} votes)
          </Typography>
          <Typography sx={{ mt: 2 }}>{movie.plot}</Typography>

          
          {movie.directors && (
            <>
              <Typography variant="h6" sx={{ mt: 2 }}>Directors</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {movie.directors.map((d) => (
                  <Chip
                    key={d.id}
                    avatar={d.primaryImage ? <Avatar src={d.primaryImage.url} /> : undefined}
                    label={d.displayName}
                  />
                ))}
              </Box>
            </>
          )}

        
          {movie.writers && (
            <>
              <Typography variant="h6" sx={{ mt: 2 }}>Writers</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {movie.writers.map((w) => (
                  <Chip
                    key={w.id}
                    avatar={w.primaryImage ? <Avatar src={w.primaryImage.url} /> : undefined}
                    label={w.displayName}
                  />
                ))}
              </Box>
            </>
          )}

        
          {movie.stars && (
            <>
              <Typography variant="h6" sx={{ mt: 2 }}>Stars</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {movie.stars.map((s) => (
                  <Chip
                    key={s.id}
                    avatar={s.primaryImage ? <Avatar src={s.primaryImage.url} /> : undefined}
                    label={s.displayName}
                  />
                ))}
              </Box>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default MovieCard;
