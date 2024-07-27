import {useContext} from "react";
import {ProdContext} from "../App";
import Heading from "./Heading";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cart = () => {
  const {cartProd, setCartProd} = useContext(ProdContext);

  const handleIncrement = (product) => {
		if (product.quantity <= 15) {
			const newCartProds = cartProd.map((prod) => {
				if (prod.id === product.id) {
					const updatedProduct = {...product, quantity: product.quantity + 1};
					return updatedProduct;
				}
				return prod;
			});
			setCartProd(newCartProds);			
		}
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      const newCartProds = cartProd.map((prod) => {
        if (prod.id === product.id) {
          const updatedProduct = {...product, quantity: product.quantity - 1};
          return updatedProduct;
        }
        return prod;
      });
      setCartProd(newCartProds);
    }
  };

  const handleRemove = (currentProd) => {
    const newCartProds = cartProd.filter((prod) => prod.id !== currentProd.id);
    setCartProd(newCartProds);
  };

  const theadStyling = "text-center py-5";
  const tbodyStyling = "text-center";
  const tableRightPadding = "";

  const cartProdToDisplay = (
    <table className="w-[85%] h-fit mt-[2rem] bg-[#f6f6f6] rounded-lg shadow-[0_0px_5px_2px_rgba(0,0,0,0.12)]">
      <thead>
        <tr>
          <th className={`text-left pl-12 py-3`}>
            <p>Product</p>
          </th>
          <th className={theadStyling}>
            <p>Unit Price</p>
          </th>
          <th className={theadStyling}>
            <p>Quantity</p>
          </th>
          <th className={theadStyling}>
            <p>Total Price</p>
          </th>
          <th className={`${theadStyling} ${tableRightPadding}`}>
            <p>Actions</p>
          </th>
        </tr>
      </thead>
      <tbody className="h-fit">
        <tr>
          <td className="bg-white"></td>
          <td className="bg-white"></td>
          <td className="bg-white"></td>
          <td className="bg-white"></td>
          <td className="bg-white"></td>
          <td className="bg-white"></td>
        </tr>
        {cartProd.map((prod, index) => (
          <tr key={index}>
            <td className={`${tbodyStyling} pl-2 w-[30rem] pb-4`}>
              <div className="flex flex-row gap-7 items-center pl-3">
                <img className="object-cover h-[12rem]" src={prod.image} alt={prod.name} />
                <p className="text-left">{prod.name}</p>
              </div>
            </td>
            <td className={tbodyStyling}>
              <p>RM{prod.price}</p>
            </td>
            <td className={tbodyStyling}>
              <button onClick={() => handleDecrement(prod)}>-</button>
              {prod.quantity}
              <button onClick={() => handleIncrement(prod)}>+</button>
            </td>
            <td className={tbodyStyling}>
              <p>RM{(prod.quantity * prod.price).toFixed(2)}</p>
            </td>
            <td className={`${tbodyStyling} ${tableRightPadding}`}>
              <button
                className="text-red-600 hover:scale-110 transition-all"
                onClick={() => handleRemove(prod)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <Navbar />
      <section className="min-h-screen mb-10">
        <Heading text="Shopping Cart" />
        <div className="flex flex-row justify-center">
          {cartProd.length > 0 ? (
            <>{cartProdToDisplay}</>
          ) : (
            <p>No items in cart yet!</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
