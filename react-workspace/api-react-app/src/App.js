import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MultiButtons from './MultiButtons';
import BookSearch from './api/BookSearch';
import Address from './api/Address';
import NewsSearch from './api/NewsSearch';
import MyMap from './api/MyMap';
import MyMap2 from './api/MyMap2';
import MyMap3 from './api/MyMap3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MultiButtons />} />
          <Route path='/address' element={<Address />} />
          <Route path='/search' element={<BookSearch />} />
          <Route path='/newssearch' element={<NewsSearch />} />
          <Route path='/map' element={<MyMap />} />
          <Route path='/map2' element={<MyMap2 />} />
          <Route path='/map3' element={<MyMap3 />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
