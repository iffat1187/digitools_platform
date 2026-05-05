import SelectedCart from "../../ui/ProductCard";

const SelectedProductCart = ({ addToCart,setAddToCart }) => {


  return (
    <div>
      <div>
        <SelectedCart addToCart={addToCart} setAddToCart={setAddToCart}></SelectedCart>
      </div>
    </div>
  );
};

export default SelectedProductCart;