import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Products from "./pages/Products";

import { HelmetProvider,Helmet } from "react-helmet-async";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
         
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </BrowserRouter>
      
      </HelmetProvider> 
      </>
  );
}

export default App;
