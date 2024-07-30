import {useContext} from "react";
import {Link} from "react-router-dom";
import {ProdContext} from "../App";

const SimilarProducts = ({group, category}) => {
  const {allProd, activeProd, setActiveProd} = useContext(ProdContext);
  2;
  const similarProd = allProd
    .filter(
      (prod) =>
        group === prod.group &&
        category === prod.category &&
        prod.id !== activeProd.id
    )
    .slice(0, 4);

  const handleSelect = (product) => {
    setActiveProd(product);
    localStorage.setItem("activeProd", JSON.stringify(product));
    console.log(product);
  };

  const prodToDisplay = (
    <div className="w-fit flex flex-row flex-wrap gap-7 justify-center px-[2rem] lg:px-[10rem]">
      {similarProd.map((product, index) => (
        <Link to="/product" key={index} onClick={() => handleSelect(product)}>
          <div className="lg:w-[265px] lg:h-[400px] lg:mb-10 flex flex-col gap-3">
            <div className="bg-[#F4F4F4] lg:mb-4 rounded-lg transition-all hover:shadow-[0_0px_10px_2px_rgba(0,0,0,0.15)]">
              <img
                className="w-[12rem] lg:w-[265px] lg:h-[360px]"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="text-center">
              <p>{product.name}</p>
              <p>RM{product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <section className="flex justify-center items-center flex-col py-10">
      <h1 className="font-semibold text-[1.1rem] text-center pb-10 lg:pb-4">
        Products you might be interested in
      </h1>
      {prodToDisplay}
    </section>
  );
};

export default SimilarProducts;
