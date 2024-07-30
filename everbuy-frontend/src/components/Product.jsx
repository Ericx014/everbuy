import {useState, useContext} from "react";
import {ProdContext} from "../App";
import {FaRegHeart, FaHeart} from "react-icons/fa";
import SimilarProducts from "./MoreProducts";
import QuantityInput from "./QuantityInput";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Product = () => {
  const {
    activeProd,
    setActiveProd,
    likedProd,
    setLikedProd,
    allProd,
    setAllProd,
    cartProd,
    setCartProd,
  } = useContext(ProdContext);

  const lorem50 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam culpa, voluptatum alias minima atque! Eius vero quos repudiandae expedita doloribus enim, ipsam natus veritatis assumenda illo obcaecati temporibus tenetur a odio tempore perspiciatis corporis quis hic. Veritatis saepe maxime, repellat velit minima porro totam debitis temporibus, voluptatum suscipit voluptate.";

  const [quantity, setQuantity] = useState(0);

  const handleLike = (selectedProd) => {
    if (!selectedProd.liked) {
      const updatedProd = {...selectedProd, liked: true};
      const newLikedProd = [...likedProd, updatedProd];
      setLikedProd(newLikedProd);
      const updatedAllProd = allProd.map((prod) => {
        if (prod.id === updatedProd.id) {
          return updatedProd;
        }
        return prod;
      });
      setActiveProd(updatedProd);
      setAllProd(updatedAllProd);
    } else {
      const updatedProd = {...selectedProd, liked: false};
      const updatedLikedProd = likedProd.filter(
        (prod) => prod.id !== selectedProd.id
      );
      setLikedProd(updatedLikedProd);
      const updatedAllProd = allProd.map((prod) => {
        if (prod.id === updatedProd.id) {
          return updatedProd;
        }
        return prod;
      });
      setActiveProd(updatedProd);
      setAllProd(updatedAllProd);
    }
  };

  const likeButton = (
    <button className="items-center" onClick={() => handleLike(activeProd)}>
      {activeProd.liked ? <FaHeart /> : <FaRegHeart />}
    </button>
  );

  const handleCartButton = () => {
    const quantityError = "Quantity cannot be zero";
    if (quantity === 0) {
      console.log(quantityError);
    } else {
      const cartProdFound = cartProd.find((prod) => prod.id === activeProd.id);
      if (!cartProdFound) {
        const itemToCart = {...activeProd, quantity: quantity};
        const newCartProds = [...cartProd, itemToCart];
        setCartProd(newCartProds);
        console.log("New cart prods", newCartProds);
      } else {
        console.log("Cart item found", cartProdFound);
        const newQuantity = cartProdFound.quantity + quantity;
        const newExistingCartProd = {...cartProdFound, quantity: newQuantity};
        const newCartProds = cartProd.map((prod) => {
          if (prod.id === cartProdFound.id) {
            return newExistingCartProd;
          }
          return prod;
        });
        setCartProd(newCartProds);
      }
    }
    setQuantity(0);
  };

  return (
    <>
      <Navbar />
      <section className="h-full">
        {activeProd && (
          <>
            <div className="bg-[#F6F6F6] flex flex-row  flex-wrap justify-center gap-[1rem] lg:gap-[4rem] h-fit pt-[2rem] pb-[3rem]">
              <div className="flex flex-col justify-center">
                <img
                  className="h-[20rem] lg:h-[30rem] object-cover"
                  src={activeProd.image}
                  alt="image"
                />
              </div>
              <div className="flex flex-col lg:py-24 justify-center w-[80%] lg:w-[40%]">
                <p className="font-bold text-[1.5rem] pb-2">
                  {activeProd.name}
                </p>
                <p className="pb-9 text-justify">{lorem50}</p>
                <div className="flex flex-row items-center gap-3 pb-4">
                  <p className="text-[1.2rem] font-semibold pr-16">
                    RM{activeProd.price}
                  </p>
                  {likeButton}
                  <QuantityInput
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                </div>
                <div className="flex flew-row items-center gap-4">
                  <button
                    onClick={() => handleCartButton()}
                    className="bg-[#F4E4C3] py-3 w-36 rounded-md transition-all hover:bg-[#8b6823] hover:text-white"
                  >
                    Add to cart
                  </button>
                  <button className="bg-[#F4E4C3] py-3 w-36 rounded-md transition-all hover:bg-[#8b6823] hover:text-white">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
            <SimilarProducts
              group={activeProd.group}
              category={activeProd.category}
            />
          </>
        )}
      </section>
      <Footer />
    </>
  );
};
export default Product;
