import { useParams } from "react-router-dom";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
 
  const product = productsData.find((product) => product.id === id);

  return (
    <div>
      <h1>{product?.name}</h1>
      <p>{product?.description}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductDetail;