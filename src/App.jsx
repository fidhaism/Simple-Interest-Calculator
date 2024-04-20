import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function App() {
  const [pamount, setPamount] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(0);
  const [validpamount, setValidPamount] = useState(true);
  const [validrate, setValidRate] = useState(true);
  const [validtime, setValidTime] = useState(true);

  const validInput = (e) => {
    const { name, value } = e.target;
    if (name === 'pamount') {
      setPamount(value);
      setValidPamount(value > 0);
    } else if (name === 'rate') {
      setRate(value);
      setValidRate(value > 0 && value <= 100);
    } else if (name === 'time') {
      setTime(value);
      setValidTime(value > 0);
    }
  };

  const submitted = (e) => {
    e.preventDefault();
    if (validpamount && validrate && validtime) {
      const simpleInterest = (pamount * rate * time) / 100;
      setResult(simpleInterest);
    }
  };

  const reset = () => {
    setPamount('');
    setRate('');
    setTime('');
    setResult(0);
    setValidPamount(true);
    setValidRate(true);
    setValidTime(true);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#FECD45', mt: 8, p: 6, borderRadius: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Simple Interest Calculator
        </Typography>
        <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
          <Typography variant="h5" component="h2">
            ₹ {result}
          </Typography>
        </Paper>
        <form onSubmit={submitted}>
          <div className='mt-2'>
            <TextField id="outlined-basic" name='pamount' value={pamount} onChange={validInput} style={{width:'100%'}} label="₹ Principle Amount" variant="outlined" />
            {!validpamount && <div className='text-danger'>Invalid Principle Amount</div>}
          </div>
          <div className='mt-2'>
            <TextField id="outlined-basic" name='rate' value={rate} onChange={validInput} style={{width:'100%'}} label="% Rate" variant="outlined" />
            {!validrate && <div className='text-danger'>Invalid Rate</div>}
          </div>
          <div className='mt-2'>
            <TextField id="outlined-basic" name='time' value={time} onChange={validInput} style={{width:'100%'}} label="Time" variant="outlined" />
            {!validtime && <div className='text-danger'>Invalid Duration</div>}
          </div>
          <div className='mt-2'>  
            <Stack spacing={2} direction="row">
              <Button variant="contained" disabled={!validpamount || !validrate || !validtime} type='submit'>
                Submit
              </Button>
              <Button variant="contained" onClick={reset}>
                Reset
              </Button>
            </Stack>
          </div>
        </form>
      </Box>
    </Container>
  );
}

export default App;
