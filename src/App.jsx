import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetails";
import Cart from "./pages/Cart";
import Products from "./data/Products";
import "./styles/Home.css"; 
import "./styles/Generales.css"; 
import "./App.css";


function App() {
  // Estado para manejar los productos en el carrito
  const [cart, setCart] = useState([]);

  // Estado para mostrar la descripción breve del producto
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Función para mostrar la descripción breve del producto
  const showDescription = (product) => {
    setSelectedProduct(product);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar cartSize={cart.length} />
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                products={Products} 
                addToCart={addToCart} 
                showDescription={showDescription} 
                selectedProduct={selectedProduct} 
              />
            } 
          /> 
          <Route 
            path="/producto/:id" 
            element={<ProductDetail addToCart={addToCart} />} 
          />  
          <Route 
            path="/carrito" 
            element={<Cart cart={cart} removeFromCart={removeFromCart} />} 
          /> 
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;



