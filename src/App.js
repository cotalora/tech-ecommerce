import './App.css';
import React from 'react';
import NavBar from './components/Layouts/NavBar/NavBar';
import { Box, Toolbar } from '@mui/material';

function App() {
  const dwWidth = "230";

  return (
    <div id='app'>
      <Box sx={{ display: 'flex' }}>
        <NavBar drawerWidth={dwWidth} />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${dwWidth}px)` } }}
        >
          <Toolbar />
          <div>
            CONTENIDO
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default App;
