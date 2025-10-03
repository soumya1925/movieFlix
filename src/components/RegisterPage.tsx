import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/authSlice';
import type { RootState } from '../store';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state: RootState) => state.auth.users); // get existing users

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password) return alert('All fields are required!');

   
    const userExists = users.some(u => u.name === name || u.email === email);
    if (userExists) {
      return alert('User with this name or email already exists!');
    }

    dispatch(register({ name, email, password, lastSearches: [] }));
    alert('Registered successfully!');
    setName('');
    setEmail('');
    setPassword('');
    
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '50px auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h4">Register</Typography>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" onClick={handleRegister}>Register</Button>
        <Button variant="outlined" onClick={() => navigate('/login')}>Go to Login</Button>
      </Box>
    </Box>
  );
}
