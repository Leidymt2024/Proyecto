const Cart = ({ cart, removeFromCart }) => {
    return (
      <div className="cart-container">
        <h1>Carrito de Compras</h1>
        {cart.length === 0 ? (
          <p>El Carrito Está Vacío</p>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={`/images/${product.image}`} alt={product.name} className="cart-image" />
              <div>
                <h2>{product.name}</h2>
                <p>€{product.price.toFixed(0)}</p>
                <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
              </div>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default Cart;
  