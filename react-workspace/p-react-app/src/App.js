import {Routes,Route} from "react-router-dom"
import './App.css';
import Categories from "./category/Categories";
import Products from "./category/Product";
import ProductDetail from "./category/ProductDetail";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:categoryId" element={<Products />} />
      <Route path="/categories/:categoryId/products/:productId" element={<ProductDetail />} />
    </Routes>
    </div>
  );
}

export default App;
