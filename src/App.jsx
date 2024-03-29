import './App.css';
import React from 'react';
import NavBar from './components/Layouts/NavBar/NavBar';
import { Box, Toolbar } from '@mui/material';
import ItemListContainer from './components/Shared/ItemListContainer/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Shared/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/Shared/CartContainer/CartContainer';
import { CartContextProvider } from './contexts/CartContext';
import { NotificationContextProvider } from './contexts/NotificationContext';

function App() {
  const dwWidth = "230";

  return (
    <div id='app'>
      <NotificationContextProvider>
        <CartContextProvider>
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
        </CartContextProvider>
      </NotificationContextProvider>
    </div>
  )
}

export default App;
