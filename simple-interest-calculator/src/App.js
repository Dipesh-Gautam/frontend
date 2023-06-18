import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './index.css';
import { formGroupClasses } from '@mui/material';

const App = ()=> {
  const [Principal, setPrincipal] = useState(0);
  const [Time, setTime] = useState(0);
  const [Rate, setRate] = useState(0);
  const [SI, setSI] = useState(0);

  const Formula = ()=> {
    const calculate = ((Principal*Time*Rate)/100);
    setSI(calculate);
  }
  
  return (
    <div className="div">
        <AppBar position="static">
        <Toolbar>
         
            
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest
          </Typography>
        </Toolbar>
      </AppBar>
      <br/>
      <TextField onChange={(event)=> setPrincipal(event.target.value)} id="outlined-basic" label="Enter Principal" variant="outlined" /><br/><br/>
      <TextField onChange={(event)=> setTime(event.target.value)} id="outlined-basic" label="Enter Time" variant="outlined" /><br/><br/>
      <TextField onChange={(event)=> setRate(event.target.value)} id="outlined-basic" label="Enter Rate" variant="outlined" /><br/><br/>
      <Button variant="contained" onClick={ ()=> Formula()  }>Calculate</Button><br/><br/>

      <Typography variant="h6" gutterBottom>
        Simple Interest = {SI}
      </Typography>



    </div>
  );
}

export default App;
