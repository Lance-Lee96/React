import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Categories from './category/Categories';
import Products from './category/Product';
import ProductDetail from './category/ProductDetail';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:categoryId" element={<Products />} />
      <Route path="/categories/:categoryId/products/:productId" element={<ProductDetail />} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
