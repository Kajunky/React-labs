import logo from './logo.svg';
import './App.css';
import WorldClock from './components/world-clock';
import Button from '@mui/material/Button';
import * as React from 'react';
import ContinuousSlider from './components/Continuous-sliders';


function App() {

  return (
    <div className="App">
      <Button variant="contained">Contained</Button>
      <ContinuousSlider />
    </div>
  );
}

export default App;
