import {Link} from "react-router-dom";
import {useContext} from "react";
import {ProdContext} from "../App";
import {FaHeart, FaRegHeart} from "react-icons/fa";

const ProductsList = ({productInfo}) => {
  const {setActiveProd, allProd, setAllProd, likedProd, setLikedProd} = useContext(ProdContext);

  const handleSelect = (product) => {
    setActiveProd(product);
    localStorage.setItem("activeProd", JSON.stringify(product));
    console.log(product);
  };

	const updateAllProd = (updatedProd) => {
    const updatedAllProd = allProd.map((prod) => {
      if (prod.id === updatedProd.id) {
        return updatedProd;
      }
      return prod;
    });
    setAllProd(updatedAllProd);		
	}

  const handleLike = (selectedProd) => {
    if (!selectedProd.liked) {
      const updatedProd = {...selectedProd, liked: true};
      const newLikedProd = [...likedProd, updatedProd];
      setLikedProd(newLikedProd);
			updateAllProd(updatedProd);
			
    } else {
      const updatedProd = {...selectedProd, liked: false};
      const updatedLikedProd = likedProd.filter(
        (prod) => prod.id !== selectedProd.id
      );
      setLikedProd(updatedLikedProd);
			updateAllProd(updatedProd);
    }
  };


  return (
    <section className="min-h-[100vh] flex flex-wrap justify-center gap-5 md:px-[3rem] lg:px-[5rem] pb-10 mt-[3rem]">
      {productInfo.map((product, index) => (
        <div
          key={index}
          className="text-center lg:w-[265px] lg:h-[400px] mb-10 flex flex-col gap-0"
        >
          <Link to="/product" onClick={() => handleSelect(product)}>
            <div className="bg-[#f4f4f4] lg:mb-4 rounded-lg transition-all hover:shadow-[0_0px_10px_2px_rgba(0,0,0,0.15)]">
              <img
                className="lg:w-[265px] lg:h-[360px]"
                src={product.image}
                alt={product.name}
              />
            </div>
          </Link>
          <div className="flex flex-row justify-between px-2">
            <div className="text-left">
              <p>{product.name}</p>
              <p>RM{product.price}</p>
            </div>
            <div>
              <button
                className="items-center"
                onClick={() => handleLike(product)}
              >
                {product.liked ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsList;
