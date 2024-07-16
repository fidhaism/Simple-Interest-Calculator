import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Header from './Components/Header';
import Footer from './Components/Footer';

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
    <div>
      <Header />
      <Container maxWidth="sm" className="container">
        <Box className="app-content">
          <Typography variant="h4" component="h1" gutterBottom className="title">
            Simple Interest Calculator
          </Typography>
          <Paper elevation={3} className="paper">
            <Typography variant="h5" component="h2">
              ₹ {result}
            </Typography>
          </Paper>
          <form onSubmit={submitted}>
            <div className='mt-2'>
              <TextField
                id="outlined-basic"
                name='pamount'
                value={pamount}
                onChange={validInput}
                style={{ width: '100%' }}
                label="₹ Principle Amount"
                variant="outlined"
                error={!validpamount}
                helperText={!validpamount && 'Invalid Principle Amount'}
              />
            </div>
            <div className='mt-2'>
              <TextField
                id="outlined-basic"
                name='rate'
                value={rate}
                onChange={validInput}
                style={{ width: '100%' }}
                label="% Rate"
                variant="outlined"
                error={!validrate}
                helperText={!validrate && 'Invalid Rate'}
              />
            </div>
            <div className='mt-2'>
              <TextField
                id="outlined-basic"
                name='time'
                value={time}
                onChange={validInput}
                style={{ width: '100%' }}
                label="Time"
                variant="outlined"
                error={!validtime}
                helperText={!validtime && 'Invalid Duration'}
              />
            </div>
            <div className='mt-2'>
              <Stack spacing={2} direction="row">
                <Button
                  className="button-primary"
                  variant="contained"
                  disabled={!validpamount || !validrate || !validtime}
                  type='submit'
                >
                  Submit
                </Button>
                <Button
                  className="button-secondary"
                  variant="contained"
                  onClick={reset}
                >
                  Reset
                </Button>
              </Stack>
            </div>
          </form>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
