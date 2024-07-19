import {useState, useContext} from "react";
import {ProdContext} from "../App";
import {FaRegHeart, FaHeart} from "react-icons/fa";
import SimilarProducts from "./MoreProducts";

const Product = () => {
  const {
    activeProd,
    setActiveProd,
    likedProd,
    setLikedProd,
    allProd,
    setAllProd,
  } = useContext(ProdContext);

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

  const handleIncrement = () => {
    if (quantity < 50) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

	const quantityInput = (
    <div className="flex flex-row justify-center bg-white w-fit items-center text-center">
      <button
        className="border-[#e3e3e3] border w-8 h-8 flex items-center justify-center rounded-l-md"
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="border-[#e3e3e3] border w-12 h-8 flex items-center justify-center">
        {quantity}
      </span>
      <button
        className="border-[#e3e3e3] border w-8 h-8 flex items-center justify-center rounded-r-md"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );

	const likeButton = (
    <button className="items-center" onClick={() => handleLike(activeProd)}>
      {activeProd.liked ? <FaHeart /> : <FaRegHeart />}
    </button>
  );

  return (
    <section className="h-full">
      {activeProd && (
        <>
          <div className="bg-[#F6F6F6] flex flex-row justify-center gap-[4rem] h-fit py-2">
            <div className="flex flex-col justify-center">
              <img
                className="h-[30rem] object-cover"
                src={activeProd.image}
                alt="image"
              />
            </div>
            <div className="flex flex-col py-24 justify-center w-[40%]">
              <p className="font-bold text-[1.5rem] pb-2">{activeProd.name}</p>
              <p className="pb-9">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat distinctio minima deserunt quod eos! Ratione eveniet,
                aspernatur eaque nihil velit at neque quos libero tempora
                quaerat tempore blanditiis odit modi architecto rem autem alias
                quidem enim minus, praesentium, doloremque cum perspiciatis
                repellendus voluptate? Dignissimos qui nam placeat cumque
                repellat expedita?
              </p>
              <div className="flex flex-row items-center gap-3 pb-4">
                <p className="text-[1.2rem] font-semibold pr-16">
                  RM{activeProd.price}
                </p>
                {likeButton}
                {quantityInput}
              </div>
              <div className="flex flew-row items-center gap-4">
                <button className="bg-[#F4E4C3] py-3 w-36 rounded-md transition-all hover:bg-[#8b6823] hover:text-white">
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
  );
};
export default Product;
