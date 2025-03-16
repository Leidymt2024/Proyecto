import { Link } from "react-router-dom";

const Home = ({ products, addToCart, showDescription, selectedProduct }) => {
  return (
    <div className="home-container">
      <h1>Lista de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/* Enlace al detalle del producto */}
            <Link to={`/producto/${product.id}`}>
              <img 
                src={`/images/${product.image}`} 
                alt={`Imagen de ${product.name}`} 
                className="product-image" 
              />
            </Link>
            <div className="product-info">
              <h2>{product.name}</h2>
              <p className="price">€{product.price.toFixed(0)}</p>
              
              <button 
                className="btn add-to-cart" 
                onClick={() => addToCart(product)}
              >
                Agregar al carrito
              </button>
              <button 
                className="btn view-description" 
                onClick={() => showDescription(product)}
              >
                Ver descripción
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mostrar la descripción del producto seleccionado */}
      {selectedProduct && (
        <div className="product-description">
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
