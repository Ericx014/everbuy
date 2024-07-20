import React, {useContext} from "react";
import {ProdContext} from "../App";
import {FaRegHeart, FaHeart} from "react-icons/fa";

const Liked = () => {
  const {likedProd, setLikedProd, allProd, setAllProd} = useContext(ProdContext);

  const handleLike = (selectedProd) => {
    const updatedProd = {...selectedProd, liked: false};
    const updatedLikedProds = likedProd.filter(
      (prod) => prod.id !== selectedProd.id
    );
    setLikedProd(updatedLikedProds);
    const updatedAllProd = allProd.map((prod) => {
      if (prod.id === updatedProd.id) {
        return updatedProd;
      }
      return prod;
    });
    setAllProd(updatedAllProd);
  };

  return (
    <section className="h-svh">
      {likedProd.length > 0 ? (
        likedProd.map((prod, index) => (
          <div key={index} className="flex flex-row gap-10">
            <p>
              {prod.id}: {prod.name}
            </p>
            <button className="items-center" onClick={() => handleLike(prod)}>
              {prod.liked ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        ))
      ) : (
        <p>No liked products yet!</p>
      )}
    </section>
  );
};

export default Liked;
