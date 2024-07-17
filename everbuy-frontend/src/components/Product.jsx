import {useContext,} from "react";
import {ProdContext} from "../App";
import {FaRegHeart, FaHeart} from "react-icons/fa";

const Product = () => {
  const {activeProd, setActiveProd, likedProd, setLikedProd, allProd, setAllProd} =
    useContext(ProdContext);

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

  return (
    <section className="h-svh">
      {activeProd && (
        <div>
          <img src={activeProd.image} alt="image" />
          <p>{activeProd.name}</p>
          <p>{activeProd.price}</p>
          <button onClick={() => handleLike(activeProd)}>
            {activeProd.liked ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      )}
    </section>
  );
};
export default Product;
