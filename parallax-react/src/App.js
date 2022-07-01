import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import Nav from './Nav';

function App() {
  <BrowserRouter>
      <Nav />
      <div className='container-fluid p-0'>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
}

export default App;
