import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css'
import DetailsPage from './pages/details/DetailsPage';
import HomePage from './pages/home/HomePage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
