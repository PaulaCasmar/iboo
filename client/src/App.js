import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product";
import AddProduct from "./components/Products/AddProduct";
import ModProduct from "./components/Products/ModProduct";
import AddCategory from "./components/Category/AddCategory";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import CategoryId from "./components/Category/CategoryId";


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/new_product" element={<AddProduct />} />
          <Route path="/modifyp/:productId" element={<ModProduct />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/category/:categoryId" element={<CategoryId />} />
          <Route path="/new_category" element={<AddCategory />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
