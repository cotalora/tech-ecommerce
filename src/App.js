import './App.css';
import React from 'react';
import Topbar from './components/Layouts/Topbar.component/Topbar';
import { Box, Toolbar, Typography } from '@mui/material';

function App() {
  const dwWidth = "230";

  return (
    <div id='app'>
      <Box sx={{ display: 'flex' }}>
        <Topbar drawerWidth={dwWidth} />
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
