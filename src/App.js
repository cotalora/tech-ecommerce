import './App.css';
import React from 'react';
import NavBar from './components/Layouts/NavBar/NavBar';
import { Box, Toolbar } from '@mui/material';
import ItemListContainer from './components/Shared/ItemListContainer/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Shared/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/Shared/CartContainer/CartContainer';

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
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
            </Routes>
        </Box>
      </Box>
    </div>
  )
}

export default App;
