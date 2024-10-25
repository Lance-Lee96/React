import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MultiButtons from './MultiButtons';
import BookSearch from './api/BookSearch';
import Address from './api/Address';
import NewsSearch from './api/NewsSearch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MultiButtons />} />
          <Route path='/address' element={<Address />} />
          <Route path='/search' element={<BookSearch />} />
          <Route path='/newssearch' element={<NewsSearch />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
