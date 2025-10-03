import { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { login } from '../store/authSlice';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!name || !password) return alert('All fields are required!');
    dispatch(login({ name, password }));
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (user) {
      alert(`Welcome, ${user.name}!`);
      navigate('/landing');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '50px auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h4">Login</Typography>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" onClick={handleLogin}>Login</Button>
        <Button variant="outlined" onClick={() => navigate('/register')}>Go to Register</Button>
      </Box>
      {currentUser && <Typography>Logged in as: {currentUser.name}</Typography>}
    </Box>
  );
}
