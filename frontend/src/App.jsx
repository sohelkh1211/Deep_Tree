import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// Importing components
import Provider from './Provider';
import Login from './components/Login';
import Register from './components/Register';
import VisualizationTree from './components/VisualizationTree';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './ProtectedRoute';

function App() {

  return (
    <BrowserRouter>
      <Toaster toastOptions={{
        className: 'font-bold border-[2px] wittgenstein-login',
        success: {
          duration: 2500,
          iconTheme: {
            primary: 'green',
            secondary: 'black',
          },
          style: {
            color: '#047857',
            borderColor: '#059669',
          },
        },
        error: {
          duration: 2500,
          iconTheme: {
            primary: '#ff4b4b',
            secondary: '#FFFAEE'
          },
          style: {
            color: '#f52f2f',
            borderColor: '#EF4444',
          },
        }
      }}
      />
      <Routes>
        <Route path='/' element={<Provider><Login /></Provider>} />
        <Route path='/register' element={<Provider><Register /></Provider>} />
        <Route element={<Provider><ProtectedRoute /></Provider>}>
          <Route path='/tree' element={<Provider><VisualizationTree /></Provider>} />
        </Route>
        {/* <Route path='/price' element={<Price />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
