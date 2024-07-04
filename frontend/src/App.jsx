import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// Importing components
import Provider from './Provider';
import Login from './components/Login';
import Register from './components/Register';
import { Toaster } from 'react-hot-toast';
import { Price } from './components';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Toaster toastOptions={{
        className: 'font-bold border-[2px] wittgenstein-login',
        success: {
          duration: 3000,
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
          duration: 1500,
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
        {/* <Route path='/price' element={<Price />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
