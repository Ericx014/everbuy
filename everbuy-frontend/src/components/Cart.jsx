import {useContext} from "react";
import {ProdContext} from "../App";

const Cart = () => {
  const {cartProd, setCartProd} = useContext(ProdContext);

  const handleRemove = (currentProd) => {
    const newCartProds = cartProd.filter((prod) => prod.id !== currentProd.id);
    setCartProd(newCartProds);
  };

  const cartProdToDisplay = (
    <div className="flex flex-col gap-[2rem] bg-[#F6F6F6]">
      {cartProd.map((prod, index) => (
        <div key={index} className="flex flex-row justify-between">
          <p>
            {prod.name}: {prod.quantity}
          </p>
          <button onClick={() => handleRemove(prod)}>Remove</button>
        </div>
      ))}
    </div>
  );

  return (
    <section className="h-svh">
      {cartProd.length > 0 ? <>{cartProdToDisplay}</> : <p>No items in cart yet!</p>}
    </section>
  );
};

export default Cart;
